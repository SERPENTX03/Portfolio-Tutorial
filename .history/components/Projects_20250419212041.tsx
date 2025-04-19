import { projects } from "@/data/Project";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Link className="text-xl underline" href="/projects">
          View All ={">"}
        </Link>
      </div>
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="border border-text">
            <Image
              src={project.image || ""}
              alt={project.title}
              width={300}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="flex gap-2 py-2 border-y border-text">
              {project.language.map((lang) => (
                <p key={lang}>{lang}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
