import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaWordpress,
} from "react-icons/fa";

const technologies = [
  {
    name: "React",
    icon: <FaReact className="w-12 h-12 text-blue-400" />,
    color: "bg-blue-100",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-12 h-12 text-green-600" />,
    color: "bg-green-100",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-12 h-12 text-yellow-500" />,
    color: "bg-yellow-100",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="w-12 h-12 text-orange-500" />,
    color: "bg-orange-100",
  },
  {
    name: "SASS",
    icon: <FaSass className="w-12 h-12 text-rose-600" />,
    color: "bg-rose-200",
  },
  {
    name: "Wordpress",
    icon: <FaWordpress className="w-12 h-12 text-gray-700" />,
    color: "bg-gray-100",
  },
];

export default function Tech() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-12">Teknologier</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${tech.color}`}
              aria-label={`Teknologi: ${tech.name}`}
            >
              {tech.icon}
              <span className="mt-3 font-semibold text-gray-800 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
