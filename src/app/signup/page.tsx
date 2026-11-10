"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, Check, Eye, EyeOff, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const form = new FormData(event.currentTarget);
    if (form.get("password") !== form.get("confirmPassword")) { setError("Your passwords do not match."); setLoading(false); return; }
    try {
      const response = await fetch("/api/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName: form.get("firstName"), email: form.get("email"), password: form.get("password") }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Unable to create your account.");
      router.push("/booking");
    } catch (requestError) { setError(requestError instanceof Error ? requestError.message : "Unable to create your account."); }
    finally { setLoading(false); }
  }

  return <><SiteHeader /><main className="auth-page signup-page"><div className="auth-art signup-art"><img src="https://images.pexels.com/photos/12950219/pexels-photo-12950219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900" alt="Houseboat in the Kerala backwaters"/><div className="auth-art-overlay"><p className="eyebrow eyebrow-cream">A FEW GOOD REASONS</p><h2>More room for<br /><i>the unexpected.</i></h2><div className="signup-benefits"><span><Check size={15}/> Save the journeys that call to you</span><span><Check size={15}/> Keep plans in one simple place</span><span><Check size={15}/> Get thoughtful notes from the road</span></div></div></div><div className="auth-panel"><div className="auth-panel-inner"><p className="eyebrow">START YOUR TRAVEL STORY</p><h1>Come <i>along.</i></h1><p className="auth-intro">Create your account in a moment. It&apos;s a little easier to wander from here.</p><form onSubmit={handleSignup} className="auth-form"><label className="field-label">FIRST NAME<input name="firstName" placeholder="What should we call you?" autoComplete="given-name" required /></label><label className="field-label">EMAIL ADDRESS<input type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label><label className="field-label">PASSWORD<div className="password-wrap"><input type={showPassword ? "text" : "password"} name="password" placeholder="At least 6 characters" autoComplete="new-password" minLength={6} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label><label className="field-label">CONFIRM PASSWORD<input type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Repeat your password" autoComplete="new-password" minLength={6} required /></label><label className="terms-label"><input type="checkbox" required/> <span>I agree to the <a href="#">terms of travel</a> and <a href="#">privacy policy</a>.</span></label>{error && <p className="form-error">{error}</p>}<button className="button button-dark auth-submit" disabled={loading}>{loading ? "Creating your account..." : "Create my account"} <ArrowRight size={16}/></button></form><p className="auth-switch">Already an explorer? <Link href="/login">Sign in <ArrowRight size={14}/></Link></p><p className="auth-secure"><Sparkles size={14}/> No spam. Just lovely places and good ideas.</p></div></div></main><SiteFooter /></>;
}
