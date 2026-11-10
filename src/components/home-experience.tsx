"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Compass, Heart, Map, ShieldCheck, Sparkles, Star, UsersRound } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";

export function HomeExperience() {
  const router = useRouter();
  const [selected, setSelected] = useState(destinations[0].slug);
  const [region, setRegion] = useState("All India");
  const visibleDestinations = useMemo(() => region === "All India" ? destinations : destinations.filter((destination) => destination.region === region), [region]);

  function startPlanning(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/booking?destination=${selected}`);
  }

  return (
    <>
      <main>
        <section className="hero-shell">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">DESIGNED FOR THE CURIOUS</p>
              <h1>Travel slower.<br /><i>Feel India</i> deeper.</h1>
              <p className="hero-intro">Thoughtfully crafted journeys into the country&apos;s living stories — from quiet coastlines to high mountain passes.</p>
              <div className="hero-actions"><Link href="#destinations" className="button button-dark">Explore journeys <ArrowDownRight size={17} /></Link><Link href="#how-it-works" className="text-cta">How we travel <ArrowRight size={16} /></Link></div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-main"><img src="https://images.pexels.com/photos/18881278/pexels-photo-18881278.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=900" alt="Amber Fort in Rajasthan" /></div>
              <div className="hero-photo-small"><img src="https://images.pexels.com/photos/12950219/pexels-photo-12950219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=480" alt="Kerala houseboat on the backwaters" /></div>
              <div className="hero-stamp"><span>EST.</span><strong>2024</strong><span>INDIA</span></div>
              <div className="hero-caption"><span className="caption-line"/> AMER FORT, RAJASTHAN</div>
            </div>
          </div>
          <div className="shell hero-trust"><div><span className="trust-number">4.9</span><span><Star size={15} fill="currentColor"/> average guest rating</span></div><div><span className="trust-number">38</span><span>handpicked journeys</span></div><div><span className="trust-number">12k</span><span>stories brought home</span></div><p>Made in India.<br />Shared with heart.</p></div>
        </section>

        <section className="planner-section">
          <div className="shell"><div className="planner-wrap"><div className="planner-label"><Compass size={20}/><span><strong>Where will India take you?</strong><small>Start with a place. We&apos;ll take care of the rest.</small></span></div><form onSubmit={startPlanning} className="planner-form"><label><span>JOURNEY</span><select value={selected} onChange={(event) => setSelected(event.target.value)}>{destinations.map((destination) => <option value={destination.slug} key={destination.slug}>{destination.name}</option>)}</select><ChevronDown size={16}/></label><label><span>WHEN</span><select defaultValue="I’m flexible"><option>I’m flexible</option><option>Next 3 months</option><option>Oct — Dec 2026</option><option>Jan — Mar 2027</option></select><ChevronDown size={16}/></label><button className="button button-saffron" type="submit">Find my trip <ArrowRight size={16}/></button></form></div></div>
        </section>

        <section className="shell destinations-section" id="destinations">
          <div className="section-topline"><div><p className="eyebrow">GO BEYOND THE POSTCARD</p><h2>Journeys with a<br /><i>sense of place.</i></h2></div><Link href="/booking" className="desktop-only text-cta">Make your own itinerary <ArrowRight size={16}/></Link></div>
          <div className="filter-row" aria-label="Filter destinations"><button className={region === "All India" ? "active" : ""} onClick={() => setRegion("All India")}>All India</button>{["NORTH INDIA", "SOUTH INDIA", "WEST INDIA", "WEST COAST", "HIMALAYAS"].map((item) => <button className={region === item ? "active" : ""} onClick={() => setRegion(item)} key={item}>{item.replace(" INDIA", "")}</button>)}</div>
          <div className="destination-grid">{visibleDestinations.map((destination, index) => <DestinationCard key={destination.slug} destination={destination} featured={index === 0} />)}</div>
        </section>

        <section className="statement-band"><div className="shell statement-grid"><p className="eyebrow eyebrow-cream">OUR WAY OF TRAVELLING</p><h2>The best of India isn&apos;t<br />on a <i>checklist.</i></h2><p className="statement-copy">It&apos;s in the chai shared on a train platform, the unexpected invitation to dinner, and the road that asks you to stay a little longer. We build space for all of it.</p><Link href="#how-it-works" className="button button-cream">Why travel with us <ArrowRight size={16}/></Link></div></section>

        <section className="shell how-section" id="how-it-works"><div className="how-photo"><img src="https://images.pexels.com/photos/18014614/pexels-photo-18014614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000" alt="Pangong Lake and Himalayan mountains"/><div className="photo-note"><Map size={21}/><span>Every route is shaped by<br />people who call it home.</span></div></div><div className="how-copy"><p className="eyebrow">THE GOOD STUFF, TAKEN CARE OF</p><h2>Less planning.<br /><i>More arriving.</i></h2><div className="feature-list"><div><span className="feature-icon"><Heart size={19}/></span><span><strong>Stay somewhere with a story</strong><small>Character-filled hotels, family homes and wild places we&apos;d go back to ourselves.</small></span></div><div><span className="feature-icon"><UsersRound size={19}/></span><span><strong>Meet the right people</strong><small>Local hosts who make a place feel like more than a destination.</small></span></div><div><span className="feature-icon"><ShieldCheck size={19}/></span><span><strong>Have us in your corner</strong><small>Thoughtful support before, during and after every journey.</small></span></div></div><Link className="text-cta" href="/booking">Start planning together <ArrowRight size={16}/></Link></div></section>

        <section className="stories-section" id="stories"><div className="shell stories-heading"><div><p className="eyebrow">FROM THE ROAD</p><h2>Postcards from<br /><i>our people.</i></h2></div><div className="stories-quote"><Sparkles size={18}/><p>“Travel should make you feel more connected — to a place, its people, and yourself.”</p></div></div><div className="shell stories-layout"><article className="story-card story-card-large"><img src="https://images.pexels.com/photos/4428274/pexels-photo-4428274.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1100" alt="Goa coast from above"/><span className="story-tag">GOA · FIELD NOTES</span><h3>The art of doing nothing on the Konkan coast.</h3><a href="#">Read the story <ArrowRight size={15}/></a></article><article className="testimonial-card"><div className="quote-mark">“</div><p>Our guide didn&apos;t just show us Rajasthan — she made it feel like a place we already belonged.</p><div><strong>Anjali &amp; Rohan</strong><span>Royal Rajasthan, January 2026</span></div></article><article className="story-card story-card-small"><img src="https://images.pexels.com/photos/11948442/pexels-photo-11948442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800" alt="The Taj Mahal"/><span className="story-tag">AGRA · SLOW GUIDE</span><h3>How to see the Taj Mahal differently.</h3><a href="#">Read the story <ArrowRight size={15}/></a></article></div></section>

        <section className="shell journal-cta"><div><p className="eyebrow">NOT SURE WHERE TO BEGIN?</p><h2>Tell us what moves<br />you. We&apos;ll <i>listen.</i></h2></div><Link className="button button-dark" href="/booking">Talk to a trip designer <ArrowRight size={16}/></Link></section>
      </main>
    </>
  );
}
