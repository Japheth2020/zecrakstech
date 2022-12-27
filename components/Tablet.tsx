

import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export const Button = ({ children, link }:any) => {
  return (
    <a target={"_blank"} rel="noreferrer" className="text-white hover:bg-white hover:text-pri p-4 rounded-full" href={link}>
      <button className=" p-2 rounded-full text-[2em]">{children}</button>
    </a>
  );
};

const Tablet = () => {
  return (
    <div className="fixed z-[100] bg-pri bottom-3 right-2 rounded-lg flex flex-col  items-center">
      <Button link={"https://wa.link/jjtebz"}>
        <BsWhatsapp />
      </Button>
      <Button link={"https://msng.link/o/?@trezorwalletzcom=tg"}>
        <FaTelegramPlane />
      </Button>
      <Button link={"https://msng.link/o/?trezorwalletzcom=ig"}>
        <BsInstagram />
      </Button>
      <Button link={"mailto:trezorwalletz.com@gmail.com?subject=I%20am%20messaging%20from%20trezorwalletz.com"}>
        <FiMail />
      </Button>
    </div>
  );
};

export default Tablet;