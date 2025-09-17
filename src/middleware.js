
import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("Middleware req.nextauth.token:", req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        console.log("Authorized callback token:", token);
        // Log the cookies to see if the session cookie is present
        console.log("Cookies:", req.cookies.getAll());
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/add-to-card",
    "/profile",
    "/dashboard1/:path*",
  ],
};
