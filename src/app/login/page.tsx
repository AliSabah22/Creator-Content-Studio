"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    try {
      const result = await signIn("google", { callbackUrl: "/studio", redirect: false });
      if (result?.error) {
        toast.error("Login failed. Please try again.");
      } else {
        toast.success("Login successful! Redirecting...");
        // NextAuth will handle redirect
        setTimeout(() => window.location.href = "/studio", 1000);
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
      <Toaster position="top-center" />
      <div className="bg-[#181818] rounded-2xl shadow-xl p-8 sm:p-12 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white mb-2">Sign in to Creator Content Studio</h1>
        <p className="text-gray-400 mb-8 text-center">Access your dashboard and start creating viral clips.</p>
        <button
          className="btn-primary w-full flex items-center justify-center gap-2 mb-4 disabled:opacity-60"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><g clipPath="url(#a)"><path d="M19.805 10.23c0-.68-.06-1.36-.18-2.02H10.2v3.84h5.44a4.64 4.64 0 0 1-2.01 3.05v2.54h3.25c1.9-1.75 2.93-4.33 2.93-7.41Z" fill="#4285F4"/><path d="M10.2 20c2.7 0 4.97-.89 6.63-2.41l-3.25-2.54c-.9.6-2.06.96-3.38.96-2.6 0-4.8-1.76-5.59-4.13H1.27v2.59A9.99 9.99 0 0 0 10.2 20Z" fill="#34A853"/><path d="M4.61 11.88a5.98 5.98 0 0 1 0-3.76V5.53H1.27a10.01 10.01 0 0 0 0 8.94l3.34-2.59Z" fill="#FBBC05"/><path d="M10.2 3.96c1.47 0 2.78.51 3.81 1.5l2.85-2.85C15.17.89 12.9 0 10.2 0A9.99 9.99 0 0 0 1.27 5.53l3.34 2.59c.79-2.37 2.99-4.13 5.59-4.13Z" fill="#EA4335"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>
          {loading ? "Signing in..." : "Continue with Google"}
        </button>
        <div className="text-gray-500 text-xs mt-4 text-center">
          By signing in, you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
} 