import Image from "next/image";

const Into = () => {
  return (
    <div className="pt-32">
      <div className="px-28">
        <h1 className="font-manrope font-bold text-4xl">Who we are</h1>
        <p className="font-manropefont-medium text-3xl pt-9">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <Image
        className="pt-32 px-24 "
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
