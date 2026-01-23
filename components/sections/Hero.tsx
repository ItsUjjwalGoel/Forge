"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (textRef.current && imageRef.current) {
      const textElements = textRef.current.children;

      tl.fromTo(
        textElements,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 },
      ).fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2 },
        "-=0.8",
      );

      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div ref={textRef} className="max-w-xl space-y-8">
          <div>
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">
              Winnovation Presents
            </h2>
            <h1 className="text-5xl tracking-wide md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              FORGE
            </h1>
          </div>

          <h3 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            A Problem Discovery <br />& Startup Thinking Program
          </h3>

          <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-md">
            Learn how real startups identify problems worth solving before they
            build. We help you bridge the gap between raw ideas and meaningful
            products.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://forms.gle/SbSPP3BD3Zd1xWya7" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full px-8 text-lg h-12 bg-primary hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Apply Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-lg h-12 bg-white/50 hover:bg-white transition-all border-primary/20 hover:border-primary/50 text-foreground">
              View Program
            </Button>
          </div>
        </div>

        {/* Right Content - 3D Illustration */}
        <div
          ref={imageRef}
          className="hidden lg:flex relative h-[400px] md:h-[600px] w-full items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/hero_illustration.png"
              alt="Forge Innovation"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>

          {/* Tag/Caption */}
        </div>
      </div>
    </section>
  );
}
