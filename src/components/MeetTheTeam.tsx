import Image from "next/image";
import React from "react";
const MeetTheTeam = () => {
  return (
    <div className="pt-16 lg:pt-48 ">
      <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl flex justify-center py-28">
        Meet the heros behind the magic
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image1.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
          />
          <h3 className="font-bold text-2xl text-start pt-11">
            Esther Howard
          </h3>
          <p className="pt-3 pb-8 opacity-50">Founder</p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image2.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
          />
          <h3 className="font-bold text-2xl text-start pt-11">
            Cody Fisher
          </h3>
          <p className="pt-3 pb-8 opacity-50">Developer</p>
        </div>
        <div className="flex flex-col items-start justify-center bg-white px-4 pt-4 shadow-md max-w-96">
          <Image
            src="/images/Team/image3.png"
            alt="#"
            width={390}
            height={376}
            objectFit="cover"
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
