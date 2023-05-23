import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const settingsRouter = createTRPCRouter({
  getSettingsByUserId: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const settings = await ctx.prisma.scoreboardSettings.findFirstOrThrow({
          where: {userId: input.userId},
      })

      if (!settings) throw new TRPCError({ code: "NOT_FOUND"})

      return {
        settings: settings,
      };
    }),
  getAllSettings: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.scoreboardSettings.findMany({
        take: 100,
        orderBy: [{createdAt: "desc"}]
    });
  }),
});
