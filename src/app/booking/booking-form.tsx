"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, LockKeyhole, Minus, Plus, ShieldCheck } from "lucide-react";
import { destinations, formatINR } from "@/lib/destinations";

export function BookingForm({ initialDestination }: { initialDestination?: string }) {
  const [destinationSlug, setDestinationSlug] = useState(destinations.some((item) => item.slug === initialDestination) ? initialDestination! : destinations[0].slug);
  const [travelers, setTravelers] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState<{ bookingReference: string; destinationName: string } | null>(null);
  const destination = useMemo(() => destinations.find((item) => item.slug === destinationSlug) ?? destinations[0], [destinationSlug]);
  const earliestDate = new Date().toISOString().split("T")[0];

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setError("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ destinationSlug, fullName: form.get("fullName"), email: form.get("email"), phone: form.get("phone"), travelDate: form.get("travelDate"), travelers, notes: form.get("notes") }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");
      setConfirmation(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : "Something went wrong."); }
    finally { setLoading(false); }
  }

  if (confirmation) return <main className="booking-page"><section className="shell confirmation-panel"><div className="confirmation-icon"><CheckCircle2 size={34}/></div><p className="eyebrow">YOUR REQUEST IS IN</p><h1>We&apos;re saving you<br /><i>a seat.</i></h1><p>Thank you for choosing {confirmation.destinationName}. Your booking reference is <strong>{confirmation.bookingReference}</strong>. A trip designer will be in touch within one business day to confirm every detail.</p><div className="confirmation-actions"><Link href="/" className="button button-dark">Explore more journeys <ArrowRight size={16}/></Link><Link href={`/destinations/${destinationSlug}`} className="text-cta">Return to journey <ArrowRight size={16}/></Link></div></section></main>;

  return <main className="booking-page"><div className="shell booking-heading"><p className="eyebrow">YOUR INDIA, YOUR WAY</p><h1>Let&apos;s make a<br /><i>good plan.</i></h1><p>Pick a journey, share the basics, and we&apos;ll make the rest feel easy.</p></div><div className="shell booking-layout"><form onSubmit={submitBooking} className="booking-form"><section><div className="form-section-title"><span>01</span><div><h2>Choose your journey</h2><p>You can fine-tune every detail with your trip designer.</p></div></div><label className="field-label">JOURNEY<select value={destinationSlug} onChange={(event) => setDestinationSlug(event.target.value)}>{destinations.map((item) => <option key={item.slug} value={item.slug}>{item.name} · {item.duration}</option>)}</select><ChevronDown size={17}/></label><div className="journey-preview"><img src={destination.image} alt=""/><div><span>{destination.region}</span><strong>{destination.name}</strong><small>{destination.duration} · from {formatINR(destination.price)}</small></div></div></section><section><div className="form-section-title"><span>02</span><div><h2>When &amp; who</h2><p>We&apos;ll check the best available departure for you.</p></div></div><div className="form-two-col"><label className="field-label">IDEAL TRAVEL DATE<input name="travelDate" type="date" min={earliestDate} required /></label><div className="field-label">TRAVELLERS<div className="stepper"><button type="button" aria-label="Remove traveller" onClick={() => setTravelers(Math.max(1, travelers - 1))}><Minus size={16}/></button><strong>{travelers} {travelers === 1 ? "traveller" : "travellers"}</strong><button type="button" aria-label="Add traveller" onClick={() => setTravelers(Math.min(14, travelers + 1))}><Plus size={16}/></button></div></div></div></section><section><div className="form-section-title"><span>03</span><div><h2>How can we reach you?</h2><p>We&apos;ll only use these details to plan your journey.</p></div></div><div className="form-two-col"><label className="field-label">FULL NAME<input name="fullName" placeholder="e.g. Priya Sharma" required /></label><label className="field-label">EMAIL ADDRESS<input name="email" type="email" placeholder="you@example.com" required /></label></div><label className="field-label">PHONE NUMBER<input name="phone" type="tel" placeholder="e.g. +91 98765 43210" required /></label><label className="field-label">ANYTHING WE SHOULD KNOW? <span className="optional">OPTIONAL</span><textarea name="notes" rows={4} placeholder="Celebrating something special? Travelling with children? Tell us about it." /></label></section>{error && <p className="form-error">{error}</p>}<button disabled={loading} className="button button-dark submit-booking" type="submit">{loading ? "Saving your request..." : "Send my booking request"} <ArrowRight size={16}/></button><p className="secure-note"><LockKeyhole size={14}/> Your information is encrypted and only shared with your trip designer.</p></form><aside className="booking-summary"><img src={destination.image} alt={destination.name}/><div className="booking-summary-content"><p>YOUR JOURNEY</p><h3>{destination.name}</h3><span>{destination.duration}</span><div className="summary-line"/><div className="summary-price"><span>From</span><strong>{formatINR(destination.price)} <small>/ guest</small></strong></div><p className="summary-small">Final price depends on your dates, room choice and group size. No payment is taken today.</p><div className="summary-assurance"><ShieldCheck size={17}/><span><strong>Travel with confidence</strong><small>Flexible changes and expert support included.</small></span></div></div></aside></div></main>;
}
