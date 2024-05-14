import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-heroYellow h-screen flex justify-center items-center overflow-hidden">
      <div className="inset-0 flex justify-center items-center px-4 py-16">
        <Image
          src="/images/Shape.png"
          alt="#"
          width={1609}
          height={970}
          objectFit="cover"
          className="animated-image"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <span className="font-bold text-5xl md:text-7xl lg:text-8xl text-center pb-48">
          Let’s create something
          <br />
          great together.
        </span>
      </div>

      <div className="absolute z-20 flex justify-center items-end -bottom-1 left-0 w-full">
        <div className="flex flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6].map((imageNumber) => (
            <div key={imageNumber} className="w-1/6 px-1">
              <Image
                src={`/images/Hands/image${imageNumber}.png`}
                alt="#"
                width={244}
                height={388}
                objectFit="cover"
                className="slider-item"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
