"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
      <div className="absolute inset-0 bg-[--background] dark:bg-black/70 backdrop-blur-md border-b border-white/20 dark:border-white/5 pointer-events-auto" />
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-10 pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-48 h-24 mt-4 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Forge Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Program", "Perks"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link href="https://forms.gle/SbSPP3BD3Zd1xWya7" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              Apply Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle (Simplified for now) */}
        <button className="md:hidden p-2 text-foreground">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
