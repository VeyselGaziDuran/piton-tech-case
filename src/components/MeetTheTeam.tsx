import Image from "next/image";
import React from "react";
const MeetTheTeam = () => {
  return (
    <div className="pt-12 lg:pt-48 px-3">
      <h2 className="font-bold text-4xl flex text-center justify-center py-14 md:py-28">
        Meet the heros behind the magic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-2 lg:pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image1.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
            className="hover:animate-pulse cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
          <h3 className="font-bold text-2xl text-start pt-11">Esther Howard</h3>
          <p className="pt-3 pb-8 opacity-50">Founder</p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-2 lg:pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image2.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
            className="hover:animate-pulse cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
          <h3 className="font-bold text-2xl text-start pt-11">Cody Fisher</h3>
          <p className="pt-3 pb-8 opacity-50">Developer</p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-2 lg:pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image3.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
            className="hover:animate-pulse cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
          <h3 className="font-bold text-2xl text-start pt-11">
            Brooklyn Simmons
          </h3>
          <p className="pt-3 pb-8 opacity-50">Designer</p>
        </div>
      </div>
    </div>
  );
};
export default MeetTheTeam;
