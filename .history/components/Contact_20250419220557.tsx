const Contact = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold relative w-fit text-white">
        <span className="text-primary">#</span>Contact
        <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
      </h2>
      <div className="flex justify-between flex-col md:flex-row">
        <p className="w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
          quaerat explicabo iusto cumque esse, quidem praesentium commodi illum
          non?
        </p>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};
export default Contact;
