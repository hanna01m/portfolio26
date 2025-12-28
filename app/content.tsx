"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";

const content = [
  {
    title: "Företagsuniversitetet",
    subheading: "Dataskydd inom GDPR och AI",
    description:
      "Fördjupad utbildning inom dataskydd, GDPR och användning av AI ur ett juridiskt och etiskt perspektiv. Fokus på hur organisationer kan arbeta lagenligt, ansvarsfullt och säkert med personuppgifter i digitala och AI-baserade lösningar.",
    content: (
      <div className="flex h-64  items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] bg-white p-6">
        <img
          src="/project-img/ftu-logo.webp"
          width={300}
          height={300}
          className="w-full h-full object-cover"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
  {
    title: "Medieinstitutet",
    subheading: "Webbutveckling inom E-handel",

    description:
      "Yrkeshögskoleutbildning inom webbutveckling med fokus på e-handel. Praktisk erfarenhet av moderna ramverk, frontend- och backendutveckling, databaser samt arbete i agila team med verklighetsnära projekt.",
    content: (
      <div className="flex h-full w-full items-center justify-center  bg-white text-white">
        <img
          src="/project-img/medieinstitutet.png"
          width={300}
          height={300}
          className="w-full h-full object-contain"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Sälj och marknadshögskolan",
    subheading: "Webbtillgängighet WCAG 2.2",
    description:
      "Specialiserad utbildning inom webbtillgänglighet enligt WCAG 2.2. Fokus på inkluderande design, användbarhet och hur digitala tjänster kan anpassas för alla användare, inklusive personer med funktionsnedsättningar.",
    content: (
      <div className="flex h-full w-full items-center justify-center  bg-white text-grey-800">
        <img
          src="/project-img/smh-logo2.png"
          width={300}
          height={300}
          className="w-full h-full object-contain"
          alt="linear board demo"
        />{" "}
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <h2 className="text-4xl font-medium text-center mb-10">Utbildning</h2>
      <StickyScroll content={content} />
    </div>
  );
}
