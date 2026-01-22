"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  MessageCircle,
  FileText,
  Gift,
  Tent,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { icon: Users, label: "Reach members & top performers" },
  { icon: MessageCircle, label: "Communicates and raises teams" },
  { icon: FileText, label: "Certificates for all participants" },
  { icon: Gift, label: "Official goodies & merchandise" },
  { icon: Tent, label: "Incubation & accel support" },
];

export default function Perks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.children,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      },
    );
  }, []);

  return (
    <section id="perks" className="py-24 container mx-auto px-6">
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {perks.map((p, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border border-black/5 rounded-xl hover:border-primary/50 transition-all text-center gap-4 h-48 hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="bg-primary/5 p-4 rounded-full text-primary rotate-3 group-hover:rotate-0 transition-transform">
              <p.icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-foreground/80 px-2 leading-tight">
              {p.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-32 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Great products don't start with features. <br />
          They start with{" "}
          <span className="relative inline-block px-2">
            <span className="relative z-10 text-primary-foreground font-extrabold italic">
              clarity.
            </span>
            <span className="absolute inset-0 bg-primary transform -skew-x-12 rounded-sm opacity-80 z-0"></span>
          </span>
        </h2>
        <p className="text-muted-foreground">
          Forge helps students develop the thinking required to build
          meaningful, responsible, and impactful products.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium shadow-lg hover:shadow-primary/20">
            Apply Now
          </button>
          <button className="border border-border px-8 py-3 rounded-md hover:bg-secondary transition-colors font-medium">
            Contact / Enquire
          </button>
        </div>
      </div>
    </section>
  );
}
