import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Destination, formatINR } from "@/lib/destinations";

export function DestinationCard({ destination, featured = false }: { destination: Destination; featured?: boolean }) {
  return (
    <article className={`destination-card ${featured ? "destination-card-featured" : ""}`}>
      <Link href={`/destinations/${destination.slug}`} className="destination-image-wrap" aria-label={`View ${destination.name}`}>
        <img src={destination.image} alt={destination.name} className="destination-image" />
        <span className="image-region">{destination.region}</span>
        <span className="image-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="destination-card-body">
        <div className="card-topline"><span><MapPin size={13} /> {destination.state}</span><span><Star size={13} fill="currentColor" /> {destination.rating}</span></div>
        <Link href={`/destinations/${destination.slug}`}><h3>{destination.name}</h3></Link>
        <p>{destination.tagline}</p>
        <div className="card-bottom"><span>{destination.duration}</span><strong>from {formatINR(destination.price)}</strong></div>
      </div>
    </article>
  );
}
