import Image from "next/image";

const Into = () => {
  return (
    <div className="pt-[45px] lg:pt-[135px]">
      <div className="px-28">
        <h1 className="font-manrope font-semibold lg:font-bold text-44">
          Who we are
        </h1>
        <p className="font-manrope font-regular lg:font-medium text-24 lg:text-30 pt-[12px] lg:pt-[36px] ">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>

      <Image
        className="pt-[45px] lg:pt-[135px] px-24 "
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
