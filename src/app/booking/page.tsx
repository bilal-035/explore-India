import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BookingForm } from "./booking-form";

export const dynamic = "force-dynamic";

export default function BookingPage({ searchParams }: { searchParams: Promise<{ destination?: string }> }) {
  return <><SiteHeader /><Suspense fallback={<main className="booking-page"><div className="shell booking-heading"><p className="eyebrow">PREPARING YOUR JOURNEY</p><h1>One moment, please.</h1></div></main>}><BookingPageContents searchParams={searchParams} /></Suspense><SiteFooter /></>;
}

async function BookingPageContents({ searchParams }: { searchParams: Promise<{ destination?: string }> }) {
  const { destination } = await searchParams;
  return <BookingForm initialDestination={destination} />;
}
