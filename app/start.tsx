import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function start() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen relative overflow-hidden px-4">
        <img
          src="/hero1.jpg"
          alt="Hero bakgrundsbild lila rosa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-gray-50 font-bold text-center rounded-3xl  shadow-lg p-10 max-w-s m-10">
          <img
            className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto object-cover"
            src="/profile-img.jpeg"
            alt="profile picture"
          />
          <h1 className="text-4xl text-gray-800"> Hanna Mustonen </h1>
          <h2 className="text-2xl text-black-700 font-light mt-2">
            {" "}
            Webbutveckling, GDPR, WCAG 2.2{" "}
          </h2>
          <p className="text-xl text-gray-800 mt-4 font-light">
            {" "}
            Jag är nyexaminerad Webbutvecklare inom E-handel med kunskap inom
            GDPR och webbtillgänglighet. Jag brinner för att skapa
            användarvänliga och tillgängliga digitala lösningar som gör
            skillnad.
          </p>
          <div className="m-6 p-4 flex flex-col md:flex-row justify-center">
            <a
              className="bg-indigo-500 px-8 py-2 m-4 rounded-3xl text-white font-semibold uppercase tracking-wide flex items-center justify-center border-2 border-transparent hover:opacity-85  focus:outline-none focus:ring-4 focus:ring-black"
              href="mailto:mustonenhanna@icloud.com"
              aria-label="Skicka email"
            >
              E-post
              <FaEnvelope className="w-6 h-6 ml-2" />
            </a>
            {/* <a
              className="bg-indigo-700 px-8 py-2 m-4 rounded-3xl text-white font-semibold uppercase tracking-wide flex items-center justify-center border-2 border-transparent hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-black"
              href="https://www.linkedin.com/in/ditt-användarnamn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna CV i ny flik"
            >
              Se mitt CV
              <FaDownload className="w-5 h-5 ml-2" />
            </a> */}
            <a
              className="bg-indigo-500 px-8 py-2 m-4 rounded-3xl text-white font-semibold uppercase tracking-wide flex items-center justify-center border-2 border-transparent hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black"
              href="https://www.linkedin.com/in/hanna-m-573776247"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna LinkedIn-profil i ny flik"
            >
              LinkedIn
              <FaLinkedin className="w-6 h-6 ml-2" />
            </a>
            <a
              className="bg-indigo-500 px-8 py-2 m-4 rounded-3xl text-white font-semibold uppercase tracking-wide flex items-center justify-center border-2 border-transparent hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black"
              href="https://github.com/hanna01m"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna GitHub-profil i ny flik"
            >
              GitHub
              <FaGithub className="w-6 h-6 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default start;
