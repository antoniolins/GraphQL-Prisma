import { prisma } from ".prisma/client";
import { Context } from "./context";

export const resolvers = {
  Query: {
    allUsers: async (parent: any, args: any, context: Context) => {
      const users = await context.prisma.user.findMany();
      return users;
    },
  },
  Mutation: {
    addUser: async (parent: any, args: any, context: Context) => {
      const user = await context.prisma.user.create({
        data: {
          email: args.email,
          name: args.name
        },
      });
      return user;
    },
    updateUser: async (
        parent: any,args:any, context: Context ) => {
        const user = await context.prisma.user.update({
          where: { id: args.id },
          data: {
            email: args.email,
            name: args.name
          },
        });
      return user;
    },
    deleteUser: async (parent: any, 
        args: { id: number }, 
        context: Context) => {
          const user = await context.prisma.user.delete({
              where: { id: args.id },
            });
          return user;
    },
  }, 
}; 
