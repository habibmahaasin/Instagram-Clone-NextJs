import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.VERCEL_ENV.GOOGLE_CLIENT_ID,
          clientSecret: process.env.VERCEL_ENV.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async redirect() {
          return '/'
        }
    },
    pages: {
      signIn: "/login",
    },
});