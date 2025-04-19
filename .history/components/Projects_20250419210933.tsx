import Link from "next/link";

const Projects = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Link className="text-xl" href="/projects">
          View All
        </Link>
      </div>
    </section>
  );
};
export default Projects;
