import Link from "next/link";

const Contact = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold relative w-fit text-white">
        <span className="text-primary">#</span>Contact
        <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
      </h2>
      <div className="flex justify-between flex-col md:flex-row">
        <p className="w-full md:w-1/2 text-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
          quaerat explicabo iusto cumque esse, quidem praesentium commodi illum
          non?
        </p>
        <div className="w-full md:w-1/2 border border-text">
          <h3 className="text-xl font-bold">Message me here</h3>
          <Link className="hover-link" href="/">
            My Link
          </Link>
          <Link href="/">serpentx@gmail.com</Link>
        </div>
      </div>
    </section>
  );
};
export default Contact;
