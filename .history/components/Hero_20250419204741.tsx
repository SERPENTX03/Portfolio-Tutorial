import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="w-1/2">
          <h2 className="text-xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, dolorem?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, voluptas optio hic reiciendis modi odio libero
            doloremque quod nisi fuga fugiat assumenda, voluptatibus, quidem
            asperiores earum illum non? Enim, praesentium!
          </p>
        </div>
        <div className="w-1/2">
          <Image
            className="object-cover rounded-full"
            src="/images/hero.jpg"
            alt="hero"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
