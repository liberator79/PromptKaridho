import { PrismaClient } from "@prisma/client";

declare global {
  var prismadb: PrismaClient | undefined; // Add `undefined` to handle the initial state
}
