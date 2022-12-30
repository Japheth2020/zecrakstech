import Link from "next/link";
import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const HeaderNav = ({ name, link }: any) => {
  return (
    <Link className="" href={link}>
      <div className="hover:bg-pri  hover:text-white px-5 py-2 w-full">
        <span className="text-[16px] font-[500]">{name}</span>
      </div>
    </Link>
  );
};

const HeaderNav_ = ({ name, link }: any) => {
  return (
    <Link className="w-full text-center" href={link}>
      <div className="text-white hover:bg-white  hover:text-pri px-5 py-2 w-full">
        <span className="text-[16px] font-[500]">{name}</span>
      </div>
    </Link>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center w-full relative z-[550]">
      <div className=" bg-pri py-[10px] px-[5em] w-full md:w-fit flex justify-between">
        <p className="text-[2em] font-[700] text-white ">ZECRAKSTECH</p>
        <button onClick={()=>setShow(!show)} className="text-white md:hidden inline text-[2.5em] ">
          {show ? <MdClose /> : <VscThreeBars />}
        </button>
      </div>

      <div className="flex-1  items-center justify-between pr-[2em] md:flex hidden">
        <div className="flex items-center gap-x-[2em]  px-[3em] ">
          <HeaderNav name={"HOME"} link="/" />
          <HeaderNav name={"SERVICES"} link="/services" />
          <HeaderNav name={"CONTACT"} link="/contact" />
        </div>
        <div className="flex items-center gap-2">
          <div className="p-4 rounded-full bg-pri text-white text-[2em]">
            <FiPhoneCall />
          </div>
          <div>
            <p>Contact Us</p>
            <p className="font-[700] "> +1 (248) 295‑1046</p>
          </div>
        </div>
      </div>

      {show && (
        <motion.div 
        initial={{y:-100}}
        animate={{y:0}}
        exit={{y:-100}}

        transition={{
          delay: 0.2,
          x: { duration: 1 },
          default: { ease: "linear" }
        }}

        className=" flex flex-col absolute  items-center justify-center px-[2em]  top-[5em]   w-full md:hidden">
          <div className="flex flex-col  items-center gap-y-[2em] w-full  py-[2em] bg-pri ">
            <HeaderNav_ name={"HOME"} link="/" />
            <HeaderNav_ name={"SERVICES"} link="/services" />
            <HeaderNav_ name={"CONTACT"} link="/contact" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
