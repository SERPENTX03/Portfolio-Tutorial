import { techStacks } from "@/data/Skils";

const Skils = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold relative w-fit">
        <span className="text-primary">#</span>Skills
        <span className="absolute -right-30 bottom-1/2 -translate-y-1/2 w-26 h-px bg-primary"></span>
      </h2>
      <div className="flex justify-between border">
        {/* Pattern */}
        <div className="w-1/2 h-full relative ">
          <div className="w-[200px] h-[200px] pattern absolute top-0 left-0"></div>
          <div className="w-[200px] h-[200px] pattern absolute bottom-0 right-0"></div>
        </div>
        {/* Skils */}
        <div className="grid grid-cols-2 gap-4 h-fit">
          {techStacks.map((skil, index) => (
            <div key={index} className=" border border-text">
              <h3 className="text-xl font-bold border-b border border-text px-3 py-1">
                {skil.title}
              </h3>
              <div className="grid grid-cols-2 p-3">
                {skil.items.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skils;
