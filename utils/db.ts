import { PrismaClient } from "@prisma/client";

const prismaClientSingeton = () => {
  return new PrismaClient();
};

type PrismaClientSingeton = ReturnType<typeof prismaClientSingeton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingeton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingeton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
