import { PrismaClient } from "@prisma/client";

// Check if we already have a PrismaClient instance attached to globalThis.
// This prevents instantiating multiple PrismaClient instances in development.
const prisma = globalThis.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") {
  // Only assign the PrismaClient instance to global in development mode.
  globalThis.prismadb = prisma;
}

export default prisma;
