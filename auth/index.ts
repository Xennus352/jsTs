import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { User, NextAuthConfig } from "next-auth";

import GitHub from "next-auth/providers/github";

export const BASE_PATH = "/api/auth";

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      // Fetch the user from the database to get the role

      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      if (dbUser) {
        session.user.role = dbUser.role; // Add the role to the session
      }

      return session;
    },

    async jwt({ token, user }) {
      // Add role to JWT token if user is available

      if (user) {
        token.role = user.role; // Add the role to the token
      }

      return token;
    },
    async redirect({ baseUrl }) {
      // Redirect to the homepage after login
      return baseUrl;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
