import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    // sign in page
    signIn: "/",
  },
});

export const config = { 
  matcher: [
    "/conversations/:path*",
    "/users/:path*",
  ]
};