import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    // sign in page
    signIn: "/auth",
  },
});

export const config = { 
  matcher: [
    "/conversations/:path*",
    "/users/:path*",
  ]
};