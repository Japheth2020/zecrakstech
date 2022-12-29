import React, { useEffect } from "react";
import classes from "./Showcase.module.css";
import { RxDoubleArrowDown } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import AOS from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";

const Showcase = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={`w flex text-center ${classes.bg}  relative`}>
      <div data-aos="fade-right" className="absolute text-[40em] -top-32 -left-60 text-blue-600">
        <BiChevronDown />
      </div>

      <div className="w-full h-full flex  bg-pri/70  ">
        <div className="lg:w-[50%] md:w-[70%] w-[90%] m-auto flex flex-col gap-10">
          <div className="text-white " data-aos="fade-up">
            <p className="md:text-[2em]">GET PROFESSIONAL CYBER SPECIALIST</p>
            <p className="leading-[1em] font-[900] lg:text-[5em] md:text-[4em] text-[3em]">
              ADVANCED INFO-TECH SOLUTIONS
            </p>
          </div>

          <div className=" text-center flex flex-col items-center gap-4">
            <p className="text-[2.4em] text-white  ">
              <RxDoubleArrowDown />
            </p>

            <Link href={"services"} className="py-5 px-[2em] font-[600] bg-pri text-white hover:bg-white hover:p-5 hover:text-pri animate-all duration-200 ">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
