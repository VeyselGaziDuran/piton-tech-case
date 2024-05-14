import Image from "next/image";

const Into = () => {
  return (
    <div className="pt-32">
      <div className="px-12 md:px-28 ">
        <h1 className="font-bold text-4xl text-center md:text-start">Who we are</h1>
        <p className="font-medium text-xl md:text-3xl pt-9">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <Image
        className="pt-20 md:pt-32 px-10 md:px-24 mx-auto"
        src="/images/MidImage.png"
        alt="#"
        objectFit="cover"
        width={1528}
        height={629}
      />
    </div>
  );
};
export default Into;
