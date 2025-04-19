import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col sm:flex-row justify-between gap-10 items-center">
        <div className="w-full sm:w-1/2">
          <h2 className="text-3xl font-bold">
            Lorem ipsum <span className="text-primary">dolor sit</span>, amet
            consectetur adipisicing elit.
            <span className="text-primary">Doloremque</span>, dolorem?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur,{" "}
            <span className="text-primary">adipisicing elit</span>. Recusandae,
            voluptas optio hic reiciendis modi odio libero doloremque quod nisi
            fuga fugiat assumenda,{" "}
            <span className="text-primary">voluptatibus</span>, quidem
            asperiores earum illum non? Enim, praesentium!
          </p>
          <button className="hover-btn border border-primary px-4 py-2 mt-14 cursor-pointer">
            Contact ME ={">"}
          </button>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image
            className="object-cover rounded-full"
            src="/images/hero.jpg"
            alt="hero"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="mt-16">
        <h5 className="text-center text-2xl font-bold border py-4">
          With great power comes great electricity bill
        </h5>
      </div>
    </section>
  );
};
export default Hero;
