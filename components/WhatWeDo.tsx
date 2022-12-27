import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { HiOutlineMinusSm } from "react-icons/hi";
import { MdSupportAgent } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full relative lg:px-[10em] md:px-[6em] px-[1em] py-[2em] ">
      <div className="flex md:flex-row flex-col gap-4 w-full relative items-start justify-between">
        <Image
          alt="img"
          src="/images/whatwedo.jpg"
          width={800}
          height={250}
          className="shadow-md flex-1 "
          data-aos="fade-right"
        />

        <div className="  md:mt-0 mt-[2em] ">
          <div className="flex flex-col gap-4">
            <p
              className="text-blue-500 text-[18px] font-[500] flex items-center gap-2"
              data-aos="fade-right"
            >
              <span className="text-[24px] font-[800] ">
                <HiOutlineMinusSm />
              </span>
              <span> About Us</span>
            </p>
            <p
              className="font-[900] md:text-[5em] text-[3em] leading-[1.3em]"
              data-aos="fade-right"
            >
              We are Providing Technological Solution
            </p>
              <p className="md:text-[18px] text-[16px] text-gray-700">
                Technology offers various tools to boost the development and
                exchange of information. Both these things are the objective of
                IT to make tasks easier and to solve many problems. At
                Srongwidget we are prepared to win, our specialists handle your
                technological issues with timely, transparent, and thorough
                strategizing. We fight against issues that come with
                technological improvement.
              </p>
            {/* <div data-aos="fade-left">
            </div> */}
          </div>

          <div className="mt-[3em] flex md:flex-row flex-col items-center gap-y-[2em] md:gap-x-[6em]">
            <div
              className="font-[500] text-[24px] flex items-start gap-1
            "
            >
              <span className="md:text-[3em] text-[2em] hover:text-[3.5em] animate duration-500 text-blue-600">
                <MdSupportAgent />
              </span>
              <p className="text-gray-700">
                24hrs Support <br /> Helpline
              </p>
            </div>

            <div
              className="font-[500] text-[24px] flex items-start gap-1
            "
            >
              <span className="md:text-[3em] text-[2em] hover:text-[3.5em] animate duration-500 text-blue-600">
                <FaHandshake />
              </span>
              <p className="text-gray-700">
                100% Satisfaction <br /> Guarantee
              </p>
            </div>
          </div>

          <div className="mt-[3em] md:text-start text-center">
            <button className="text-[18px] px-[3em] py-[1em] bg-blue-500 font-[600] text-white hover:bg-pri animate duration-300">
              REQUEST FOR A PROFESSIONAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
