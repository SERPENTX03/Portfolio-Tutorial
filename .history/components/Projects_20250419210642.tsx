import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2>Projects</h2>
        <Link href="/projects">View All</Link>
      </div>
    </section>
  );
};
export default Projects;
