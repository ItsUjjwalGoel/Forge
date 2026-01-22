"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Users, Lightbulb, CheckSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: Globe,
    title: "Real world problem discovery",
    color: "text-blue-600",
    bg: "bg-blue-50",
    pastel: "bg-primary/60", // tailored pastel blue
    footer: "IDENTIFY OPPORTUNITIES",
  },
  {
    icon: Users,
    title: "Understanding users",
    color: "text-violet-600",
    bg: "bg-violet-50",
    pastel: "bg-primary/60", // tailored pastel violet
    footer: "DECODE HUMAN BEHAVIOR",
  },
  {
    icon: Lightbulb,
    title: "Startup thinking",
    color: "text-amber-600",
    bg: "bg-amber-50",
    pastel: "bg-primary/60", // tailored pastel amber
    footer: "THINK LIKE A FOUNDER",
  },
  {
    icon: CheckSquare,
    title: "MVP decisions",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    pastel: "bg-primary/60", // tailored pastel emerald
    footer: "BUILD WHAT MATTERS",
  },
];

export default function LearningPath() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section id="program" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          What You'll Learn
        </h2>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative h-[250px] rounded-[2rem] p-0 flex flex-col group hover:-translate-y-2 transition-transform duration-300`}>
              {/* Inner White Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center h-full w-full shadow-sm relative z-10 border border-black/5">
                <div
                  className={`p-4 rounded-xl mb-6 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="font-bold text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
