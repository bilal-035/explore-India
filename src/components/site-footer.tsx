import Link from "next/link";
import { ArrowUpRight, Camera, MessageCircle, Play } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <p className="eyebrow eyebrow-cream">YOUR NEXT STORY STARTS HERE</p>
          <h2>India, with more<br /><i>meaning.</i></h2>
        </div>
        <Link href="/booking" className="round-link" aria-label="Start planning a trip"><ArrowUpRight size={30} /></Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <div className="brand brand-light"><span className="brand-mark">EI</span><span className="brand-copy"><strong>EXPLORE INDIA</strong><em>travelled, discovered, experienced</em></span></div>
          <p>Small-group journeys and stays that leave room for the unexpected.</p>
          <div className="social-row"><a href="#" aria-label="Instagram"><Camera size={18}/></a><a href="#" aria-label="Community"><MessageCircle size={18}/></a><a href="#" aria-label="Video stories"><Play size={18}/></a></div>
        </div>
        <div><p className="footer-label">EXPLORE</p><Link href="/#destinations">Destinations</Link><Link href="/booking">Plan a trip</Link><Link href="/#how-it-works">How it works</Link></div>
        <div><p className="footer-label">HELP</p><Link href="/login">My bookings</Link><a href="mailto:hello@exploreindia.example">Contact us</a><a href="#">Travel journal</a></div>
        <div><p className="footer-label">LET&apos;S KEEP WANDERING</p><p className="footer-newsletter-copy">Monthly notes from our favourite corners of India.</p><div className="footer-email"><input aria-label="Email address" placeholder="Your email address"/><button aria-label="Subscribe"><ArrowUpRight size={18}/></button></div></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Explore India</span><span>Made for curious travellers</span><span>Privacy & terms</span></div>
    </footer>
  );
}
