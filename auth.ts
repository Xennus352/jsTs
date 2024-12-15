import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 2592000,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      profile: (profile) => ({
        id: String(profile.id),
        name: profile.name || null,
        email: profile.email || null,
        image: profile.avatar_url || null,
        role: profile.role ? profile.role : "USER",
      }),
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      
      return { ...token, ...user };
    },
    async session({ session }) {
     
      return session;
    },
  },
});
