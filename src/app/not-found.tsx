"use client";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#090d16] text-[#f1f5f9] px-6 text-center select-none">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="z-10 flex flex-col items-center max-w-md">
        <h1 className="text-8xl font-bold tracking-tighter text-primary mb-4 animate-pulse">
          404
        </h1>
        <h2 className="text-xl font-bold text-white mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-xs text-text-muted leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-all shadow-md shadow-primary/15 hover:-translate-y-0.5 cursor-pointer"
        >
          <Home size={14} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
