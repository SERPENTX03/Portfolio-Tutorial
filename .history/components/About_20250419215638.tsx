import Image from "next/image";

const About = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold relative w-fit ">
        <span className="text-primary">#</span>About
        <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
      </h2>
      <div className="flex justify-between mt-10">
        <div className="w-1/2 text-text">
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
        </div>
        <div className="w-1/2 h-80 relative">
          <Image src="/images/about.jpg" alt="about" fill />
        </div>
      </div>
    </section>
  );
};
export default About;
