import React from "react";
import { Project } from "@/lib/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";

function Card({ project }: { project: Project }) {
  return (
    <>
      <div>
        <div
          className="max-w-sm 
          m-4 
          flex flex-col 
          overflow-hidden 
          rounded-2xl 
          border border-gray-200 
          bg-white 
          shadow-md
          transition-all 
          duration-300 
          hover:shadow-lg 
          hover:-translate-y-1"
        >
          <img
            className="w-full h-48 object-cover scale-[1.03]"
            src={project.image || "project-img/default.png"}
            alt={project.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <div className=" pb-2 flex flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 rounded-sm border px-3 py-1 text-sm font-mono font-semibold text-blue-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-base">{project.description}</p>
            <div className="text-gray-700 text-base flex-row mt-4 mb-7 flex gap-4 ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Öppna demo för ${project.title} i ny flik`}
                className="bg-[#f2f2f2] w-fit pl-3 pr-2 py-2 rounded-md flex items-center gap-2 font-bold hover:cursor-pointer hover:border "
              >
                Visa kod
                <FaGithub className="w-6 h-6 " />
              </a>{" "}
              {project.noDemo ? (
                <div className="relative group">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="bg-gray-400 text-white cursor-not-allowed w-fit pl-3 pr-2 py-2 rounded-md flex items-center gap-2 font-medium hover:opacity-90"
                  >
                    Visa demo
                    <FaGlobe className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Öppna demo för ${project.title} i ny flik`}
                  className="bg-black w-fit pl-3 pr-2 py-2 rounded-md flex items-center gap-2 font-medium hover:opacity-80"
                >
                  <span className="text-white flex items-center">
                    Visa demo
                    <FaGlobe className="w-6 h-6 ml-2" />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
