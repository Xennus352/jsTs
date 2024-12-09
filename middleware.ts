import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"; // Import NextResponse

export async function middleware(req: Request) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    cookieName:
      process.env.NODE_ENV === "production"
        ? "__Secure-next-auth.session-token"
        : "authjs.session-token",
  });

  // If the token exists (user is authenticated), redirect to another page
  console.log(token);
  if (token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the token does not exist (user is not authenticated), allow access to /hero
  return NextResponse.next();
}

export const config = {
  matcher: ["/hero"], // Apply this middleware only to the /hero route
};
