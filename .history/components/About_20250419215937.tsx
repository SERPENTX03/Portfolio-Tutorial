import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between mt-10">
        <div className="w-1/2 text-text text-lg">
          <h2 className="text-3xl font-bold relative w-fit text-white">
            <span className="text-primary">#</span>About
            <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
          </h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti
            quaerat earum nostrum id blanditiis pariatur minus. Dignissimos,
            aspernatur maxime.
          </h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti
            quaerat earum nostrum id blanditiis pariatur minus. Dignissimos,
            aspernatur maxime.
          </h3>
          <Link className="hover-btn mt-10" href="">
            View All ={">"}
          </Link>
        </div>
        <div className="w-1/2 h-80 flex items-center justify-center">
          <Image src="/images/about.jpg" alt="about" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};
export default About;
