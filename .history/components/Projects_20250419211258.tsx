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
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
    </section>
  );
};
export default Projects;
