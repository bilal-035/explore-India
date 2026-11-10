import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, MapPin, ShieldCheck, Star, UsersRound } from "lucide-react";
import { destinations, formatINR, getDestination } from "@/lib/destinations";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  return (
    <><SiteHeader /><main className="detail-page">
      <div className="shell detail-back"><Link href="/#destinations"><ArrowLeft size={16}/> All journeys</Link></div>
      <section className="shell detail-hero">
        <div className="detail-hero-image"><img src={destination.image} alt={destination.name}/><span className="image-region">{destination.region}</span></div>
        <div className="detail-hero-copy"><p className="eyebrow">{destination.state}</p><h1>{destination.name}</h1><p className="detail-lede">{destination.tagline}</p><div className="detail-rating"><span><Star size={16} fill="currentColor"/> {destination.rating} <small>{destination.reviews}</small></span><span><CalendarDays size={16}/> {destination.duration}</span></div><Link href={`/booking?destination=${destination.slug}`} className="button button-dark detail-mobile-book">Book this journey <ArrowRight size={16}/></Link></div>
      </section>
      <section className="shell detail-content-grid">
        <div className="detail-story"><p className="eyebrow">ABOUT THIS JOURNEY</p><h2>See the familiar<br /><i>with fresh eyes.</i></h2><p>{destination.description}</p><div className="highlight-note"><span>OUR FAVOURITE MOMENT</span><strong>{destination.highlight}</strong></div><div className="detail-facts"><div><CalendarDays size={19}/><span><small>BEST TIME TO GO</small><strong>{destination.bestTime}</strong></span></div><div><UsersRound size={19}/><span><small>GROUP SIZE</small><strong>{destination.groupSize}</strong></span></div><div><MapPin size={19}/><span><small>STARTS IN</small><strong>{destination.state}</strong></span></div></div></div>
        <aside className="booking-sidecard"><p>STARTING FROM</p><strong>{formatINR(destination.price)} <small>/ person</small></strong><span className="sidecard-duration">{destination.duration}</span><Link href={`/booking?destination=${destination.slug}`} className="button button-saffron">Choose dates <ArrowRight size={16}/></Link><small className="sidecard-note"><ShieldCheck size={14}/> Free changes up to 30 days before travel</small></aside>
      </section>
      <section className="detail-includes"><div className="shell includes-grid"><div><p className="eyebrow eyebrow-cream">THE DETAILS THAT MATTER</p><h2>Good to know<br /><i>before you go.</i></h2></div><div><h3>What&apos;s included</h3><ul>{destination.includes.map((item) => <li key={item}><Check size={16}/>{item}</li>)}</ul></div><div><h3>Made for you if...</h3><p>You&apos;d rather have a great conversation than a packed coach, and you believe the route is as important as the arrival.</p></div></div></section>
      <section className="shell itinerary-section"><div className="itinerary-intro"><p className="eyebrow">A RHYTHM, NOT A RUSH</p><h2>Your journey,<br /><i>day by day.</i></h2><p>Each departure is a little different, but this gives you the shape of the days ahead.</p></div><div className="itinerary-list">{destination.itinerary.map((item) => <article key={item.day}><span>{item.day}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
      <section className="shell detail-bottom-cta"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Make this story<br /><i>your own.</i></h2></div><Link href={`/booking?destination=${destination.slug}`} className="button button-dark">Plan this journey <ArrowRight size={16}/></Link></section>
    </main><SiteFooter /></>
  );
}
