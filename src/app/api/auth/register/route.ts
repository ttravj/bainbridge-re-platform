import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/db/prisma";

const RegisterSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8),
  orgName: z.string().min(2).max(200),
});

export async function POST(req: Request) {
  const body: unknown = await req.json();
  const parsed = RegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { name, email, password, orgName } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const slug =
    orgName.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 50) +
    "-" +
    Date.now().toString();

  const org = await prisma.organization.create({
    data: {
      name: orgName,
      slug,
      type: "SOLO",
      plan: "FREE",
    },
  });

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      role: "AGENT",
      organizationId: org.id,
    },
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
