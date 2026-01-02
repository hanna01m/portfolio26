import React from "react";

const educationData = [
  {
    title: "Webbutveckling inom E-handel",
    type: "Yrkeshögskoleutbildning",
    description:
      "Yrkeshögskoleutbildning inom webbutveckling med fokus på e-handel. Praktisk erfarenhet av moderna ramverk, frontend- och backendutveckling, databaser samt arbete i agila team med verklighetsnära projekt.",
    logo: "/project-img/medieinstitutet.png",
  },
  {
    title: "Dataskydd inom GDPR & AI ",
    type: "Kurs",
    description:
      "Fördjupad utbildning inom dataskydd, GDPR och användning av AI ur ett juridiskt och etiskt perspektiv. Fokus på hur organisationer kan arbeta lagenligt, ansvarsfullt och säkert med personuppgifter i digitala och AI-baserade lösningar.",
    logo: "/project-img/ftu-logo.webp",
  },
  {
    title: "Webbtillgänglighet – WCAG 2.2",
    type: "Kurs",
    description:
      "Utbildning inom webbtillgänglighet enligt WCAG 2.2 med fokus på inkluderande design. Praktisk erfarenhet av manuell tillgänglighetsgranskning samt verktyg som Axe DevTools, Google Lighthouse och WAVE.",
    logo: "/project-img/smh-logo2.png",
  },
];

export default function EducationSection() {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="education-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="education-title"
          className="text-4xl font-medium text-center mb-12"
        >
          Utbildning
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-indigo-500"
            >
              <div className="flex flex-col items-center">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.title} logotyp`}
                    className="w-28 h-28 object-contain mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2 text-center">
                  {edu.title}
                </h3>
                <span className="text-md text-gray-800 mb-4">{edu.type}</span>
                <p
                  className="text-gray-600 text-center"
                  aria-label="Beskrivning av kursen"
                >
                  {edu.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
