import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma: new PrismaClient() }),
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.userId = user.id;
      return session;
    },
  },
});
