"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Unable to sign in.");
      router.push("/booking");
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : "Unable to sign in."); }
    finally { setLoading(false); }
  }

  return <><SiteHeader /><main className="auth-page"><div className="auth-art"><img src="https://images.pexels.com/photos/11948442/pexels-photo-11948442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" alt="Taj Mahal in Agra"/><div className="auth-art-overlay"><p className="eyebrow eyebrow-cream">WELCOME BACK</p><h2>The road is still<br /><i>calling.</i></h2><p>Pick up where you left off and keep your favourite journeys close.</p></div></div><div className="auth-panel"><div className="auth-panel-inner"><p className="eyebrow">GOOD TO SEE YOU</p><h1>Welcome <i>back.</i></h1><p className="auth-intro">Sign in to view your trips, save ideas, and start planning the next one.</p><form onSubmit={handleLogin} className="auth-form"><label className="field-label">EMAIL ADDRESS<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label><label className="field-label">PASSWORD<div className="password-wrap"><input type={showPassword ? "text" : "password"} name="password" placeholder="Your password" autoComplete="current-password" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label><div className="auth-utility"><label className="check-label"><input type="checkbox"/> <span>Remember me</span></label><a href="#">Forgot password?</a></div>{error && <p className="form-error">{error}</p>}<button className="button button-dark auth-submit" disabled={loading}>{loading ? "Signing you in..." : "Sign in"} <ArrowRight size={16}/></button></form><p className="auth-switch">New to Explore India? <Link href="/signup">Create an account <ArrowRight size={14}/></Link></p><p className="auth-secure"><LockKeyhole size={14}/> Your journeys and details stay private.</p></div></div></main><SiteFooter /></>;
}
