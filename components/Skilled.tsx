import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMinusSm } from "react-icons/hi";
import { FaHandSparkles } from "react-icons/fa";

const SkilledCard = () => {
  return (
    <div className="flex flex-col rounded-md border-[2px] border-white shadow-2xl ">
      <div className="flex items-center gap-4 p-4 bg-white text-pri">
        <div className="bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-[3em] ">
          <FaHandSparkles />
        </div>
        <p className="font-[700] text-[2em]">Recovery</p>
      </div>
      <div className="bg-pri p-[3em]">
        <p className="text-[20px] text-white font-[500] text-center">
          We recover funds from crypto scams, and other cyber crimes. We also
          provide a wide range of services to help you protect your funds and
          assets from cyber threats.
        </p>
      </div>
    </div>
  );
};

const Skilled = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" pt-[3em] ">
      <div className={` lg:px-[10em] md:px-[6em] px-[2em] py-[3em] h-full`}>
        <div className="flex md:flex-row flex-col md:justify-between gap-[2em] ">
          <div className="">
            <p
              className="text-blue-500 text-[18px] font-[500] flex items-center gap-2"
            //   data-aos="fade-right"
            >
              <span className="text-[24px] font-[800] ">
                <HiOutlineMinusSm />
              </span>
              <span>Key Services</span>
            </p>

            <p
              className="font-[900] md:text-[6em] text-[4em] leading-[1.3em] mt-4"
            //   data-aos="fade-right "
            >
              Skilled Service & Solution
            </p>
          </div>
          <p 
        //   data-aos="fade-left"
           className="text-[20px] ">
            Whether you’ve lost money in your capacity as an investor, trader,
            miner, shopper, romance scam victim, or online user, we’re capable
            to help you in our specialization as a consultant, legal aid,
            recovery agent, or with support and information.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[5em] gap-[3em]">
          <SkilledCard />
          <SkilledCard />
          <SkilledCard />
          <SkilledCard />
          <SkilledCard />
        </div>
      </div>
    </div>
  );
};
export default Skilled;
