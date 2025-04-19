const Skils = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold relative w-fit">
        <span className="text-primary">#</span>Skills
        <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
      </h2>
      <div className="flex justify-between">
        {/* Pattern */}
        <div className="w-full h-full relative">
          <div className="w-[200px] h-[200px] pattern absolute top-0 left-0"></div>
          <div className="w-[200px] h-[200px] pattern absolute bottom-0 right-0"></div>
        </div>
        {/* Skils */}
        <div></div>
      </div>
    </section>
  );
};
export default Skils;
