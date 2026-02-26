import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

// Load env vars
const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not set");

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  const org = await prisma.organization.upsert({
    where: { slug: "bainbridge-demo" },
    update: {},
    create: {
      name: "Bainbridge Demo Brokerage",
      slug: "bainbridge-demo",
      type: "BROKERAGE",
      plan: "AGENT_PRO",
      state: "WA",
    },
  });

  const agentPassword = await bcrypt.hash("password123", 12);

  const agent = await prisma.user.upsert({
    where: { email: "agent@demo.bainbridgeai.com" },
    update: {},
    create: {
      name: "Sarah Johnson",
      email: "agent@demo.bainbridgeai.com",
      passwordHash: agentPassword,
      role: "AGENT",
      organizationId: org.id,
      onboardingDone: true,
    },
  });

  await prisma.contact.createMany({
    skipDuplicates: true,
    data: [
      {
        organizationId: org.id,
        agentId: agent.id,
        firstName: "Michael",
        lastName: "Chen",
        email: "michael.chen@email.com",
        phone: "206-555-0101",
        type: "LEAD",
        stage: "ACTIVE",
        temperature: "HOT",
        source: "ZILLOW",
        isSOI: false,
        tags: ["first-time-buyer", "pre-approved"],
      },
      {
        organizationId: org.id,
        agentId: agent.id,
        firstName: "Patricia",
        lastName: "Williams",
        email: "pat.williams@email.com",
        phone: "206-555-0102",
        type: "CLIENT",
        stage: "UNDER_CONTRACT",
        temperature: "WARM",
        source: "REFERRAL",
        isSOI: true,
        tags: ["seller", "downsizing"],
      },
      {
        organizationId: org.id,
        agentId: agent.id,
        firstName: "Robert",
        lastName: "Martinez",
        email: "rob.martinez@email.com",
        phone: "206-555-0103",
        type: "PAST_CLIENT",
        stage: "CLOSED",
        temperature: "WARM",
        source: "SOI",
        isSOI: true,
        tags: ["repeat-buyer", "soi-a-list"],
      },
    ],
  });

  console.log("✓ Seed complete");
  console.log(`  Org: ${org.name} (id: ${org.id})`);
  console.log(`  Agent: ${agent.email} / password123`);
  console.log("  Contacts: 3 demo contacts created");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
