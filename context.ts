import { PrismaClient } from '@prisma/client'
import { resolvers } from './resolvers';

export interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

export const context: Context = {
  prisma: prisma,
}
export default context;
