import Image from "next/image";
import React from "react";
const ContactForm = () => {
  return (
    <div className="mt-[720px] lg:mt-[0] md:mt-[240px] xl:mt-[0] pt-52  px-[100px] mb-48">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-40 justify-items-center">
        <div className="bg-contactColor pt-24 xl:pt-40 pl-16 xl:pl-36 pb-10 kl:pb-20 pr-12 xl:pr-24  ">
          <Image
            src="/images/SideImage.png"
            alt="#"
            width={378}
            height={656}
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <h2 className="font-bold text-44 pb-12 text-end ">
            We&apos;d love to hear <br /> from you
          </h2>
          <div className="flex items-center justify-center">
            <div className=" w-full">
              <form action="https://example.com" method="POST">
                <div className="mb-5">
                  <label
                    form="name"
                    className="mb-3 block text-base font-medium text-black"
                  ></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name*"
                    className="placeholder-current border-2 w-full border-black bg-white py-8 px-12 text-2xl font-medium text-black outline-none focus:border-heroYellow focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    form="email"
                    className="mb-3 block text-base font-medium text-black"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    className="placeholder-current border-2 w-full border-black bg-white py-8 px-12 text-2xl font-medium text-black outline-none focus:border-heroYellow focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    form="url"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  ></label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="Website URL*"
                    className="w-full placeholder-current border-2 border-black bg-white py-8 px-12 text-2xl font-medium text-black outline-none focus:border-heroYellow focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    form="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  ></label>
                  <textarea
                    rows={3}
                    name="message"
                    id="message"
                    placeholder="Project Details*"
                    className="w-full resize-none placeholder-current border-2 border-black bg-white py-8 px-12 text-2xl font-medium text-black outline-none focus:border-heroYellow focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button className="hover:shadow-form bg-black py-8 w-full text-base text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
