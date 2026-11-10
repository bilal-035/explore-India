import { db } from "@/db";
import { bookings } from "@/db/schema";
import { getDestination } from "@/lib/destinations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const destinationSlug = typeof body.destinationSlug === "string" ? body.destinationSlug : "";
    const destination = getDestination(destinationSlug);
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const travelDate = typeof body.travelDate === "string" ? body.travelDate : "";
    const travelers = Number(body.travelers);
    const notes = typeof body.notes === "string" ? body.notes.trim().slice(0, 600) : "";

    if (!destination || fullName.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || phone.length < 7 || !travelDate || !Number.isInteger(travelers) || travelers < 1 || travelers > 14) {
      return NextResponse.json({ error: "Please complete all required booking details before continuing." }, { status: 400 });
    }

    const bookingReference = `EI-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    await db.insert(bookings).values({
      bookingReference,
      destinationSlug,
      destinationName: destination.name,
      fullName,
      email,
      phone,
      travelDate,
      travelers,
      notes: notes || null,
    });

    return NextResponse.json({ ok: true, bookingReference, destinationName: destination.name }, { status: 201 });
  } catch (error) {
    console.error("Booking error", error);
    return NextResponse.json({ error: "We could not save your booking request. Please try again." }, { status: 500 });
  }
}
