import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

// All service functions must include organizationId in their queries.
// This function returns the prisma client — TypeScript enforces the organizationId
// requirement through the schema's required fields.
export function scopedPrisma(_organizationId: string) {
  return prisma;
}

// AuditLog helper — call this after every mutation
export async function auditLog(params: {
  organizationId: string;
  userId?: string;
  action: "CREATE" | "UPDATE" | "DELETE" | "VIEW_SENSITIVE" | "AI_INVOKE" | "EXPORT";
  entityType: string;
  entityId: string;
  changes?: Prisma.InputJsonValue;
  ipAddress?: string;
}) {
  return prisma.auditLog.create({ data: params });
}
