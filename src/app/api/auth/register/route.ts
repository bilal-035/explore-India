import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (firstName.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
      return NextResponse.json({ error: "Please enter a name, valid email, and password of at least 6 characters." }, { status: 400 });
    }

    const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1);
    if (existing.length) {
      return NextResponse.json({ error: "An account with that email already exists. Please sign in instead." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await db.insert(users).values({ firstName, email, passwordHash });

    const response = NextResponse.json({ ok: true, user: { firstName, email } }, { status: 201 });
    response.cookies.set("explore_india_user", encodeURIComponent(JSON.stringify({ firstName, email })), {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 14,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Register error", error);
    return NextResponse.json({ error: "We could not create your account right now. Please try again." }, { status: 500 });
  }
}
