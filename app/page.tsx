import { projects } from "@/lib/projects";
import Start from "./start";
// import { StickyScrollRevealDemo } from "./content";
import Footer from "@/components/Footer";
import EducationSection from "./EducationSection";
import Tech from "@/components/Tech";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Start />
      <div className=" flex flex-wrap justify-center  py-10 px-10">
        <h2 className="w-full text-4xl font-medium mb-8 text-center">
          Några av mina projekt
        </h2>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>{" "}
      <EducationSection />
      {/* <StickyScrollRevealDemo /> */}
      <Tech />
      <Footer />
    </>
  );
}
