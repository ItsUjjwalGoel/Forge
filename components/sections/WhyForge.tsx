"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyForge() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={textRef} className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Forge Exists
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Very few are taught{" "}
              <span className="text-foreground font-semibold">
                what to build, and why.
              </span>
            </p>
            <p>Most students are taught how to build.</p>
            <p>
              Forge is designed to bridge that gap. We focus on problem clarity,
              user understanding, and startup-style thinking—the foundation
              behind every meaningful product.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
