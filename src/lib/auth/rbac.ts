import { getServerSession } from "next-auth";
import { authOptions } from "./options";
import { redirect } from "next/navigation";

export type AppRole = "AGENT" | "TEAM_LEAD" | "BROKER" | "ADMIN";

export interface AuthUser {
  id: string;
  organizationId: string;
  role: AppRole;
  email: string;
  name: string;
}

export async function requireAuth(): Promise<AuthUser> {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  return session.user as AuthUser;
}

export async function requireRole(role: AppRole): Promise<AuthUser> {
  const user = await requireAuth();
  const hierarchy: AppRole[] = ["AGENT", "TEAM_LEAD", "BROKER", "ADMIN"];
  const userIndex = hierarchy.indexOf(user.role);
  const requiredIndex = hierarchy.indexOf(role);
  if (userIndex < requiredIndex) redirect("/dashboard");
  return user;
}
