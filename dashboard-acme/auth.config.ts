import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")

      // Logic provider for NextJS
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true
      //   return false
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL("/dashboard", request.nextUrl))
      // }

      // return true

      // My solution:
      if (isOnDashboard) {
        return isLoggedIn
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", request.nextUrl))
      }

      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
