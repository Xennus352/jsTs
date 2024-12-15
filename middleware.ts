
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This middleware checks if a user is authenticated (signed in)
export async function middleware(req: Request) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If token is not found, redirect the user to the sign-in page
  if (!token) {
    return NextResponse.redirect(new URL("/hero", req.url));
  }

  // If authenticated, allow the request to proceed
  return NextResponse.next();
}

// Config to specify which routes this middleware applies to
export const config = {
  matcher: ["/", "/profile", "/blog:path*"], // Paths that need authentication
};
