import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return NextResponse.json({ error: "That email or password does not match our records." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true, user: { firstName: user.firstName, email: user.email } });
    response.cookies.set("explore_india_user", encodeURIComponent(JSON.stringify({ firstName: user.firstName, email: user.email })), {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 14,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Login error", error);
    return NextResponse.json({ error: "We could not sign you in right now. Please try again." }, { status: 500 });
  }
}
