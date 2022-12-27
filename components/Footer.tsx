import React from "react";
import { Button } from "./Tablet";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="lg:px-[10rem] md:p-[6em] p-[1em]  py-[6em] bg-pri">
      <div className=" flex md:flex-row flex-col md:gap-x-[4em] gap-0">
        <div className="flex flex-col gap-5 flex-1 mb-[3em]">
          <p className="text-[3em] font-[700] text-white ">ZECRAKSTECH</p>
          <p className="text-[18px] text-white ">
          ZECRAKSTECH is a top-level organization that operates in more than
            149 countries, with top-notch specialists and professionals to
            assist you with any technological issue.
          </p>

          <div className="flex items-center ">
            <Button link={"https://wa.link/jjtebz"}>
              <BsWhatsapp />
            </Button>
            <Button link={"https://msng.link/o/?@trezorwalletzcom=tg"}>
              <FaTelegramPlane />
            </Button>
            <Button link={"https://msng.link/o/?trezorwalletzcom=ig"}>
              <BsInstagram />
            </Button>
            <Button
              link={
                "mailto:trezorwalletz.com@gmail.com?subject=I%20am%20messaging%20from%20trezorwalletz.com"
              }
            >
              <FiMail />
            </Button>
          </div>
        </div>

        <div className="text-white flex flex-col gap-6">
          <p className="text-[18px] font-[900]">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              className="flex items-center gap-2"
              target={"_blank"}
              rel="noreferrer"
              href={"https://wa.link/jjtebz"}
            >
              <BsWhatsapp />
              +1 (248) 257‑3285
            </a>
            <a
              className="flex items-center gap-2"
              href={"https://t.me/ZECRAKSTECH"}
            >
              <FaTelegramPlane />
              ZECRAKSTECH
            </a>
            <a
              className="flex items-center gap-2"
              href={"https://instagram.com/zecrakstech?igshid=YmMyMTA2M2Y="}
            >
              <BsInstagram />
              zecrakstech
            </a>
            <a
              className="flex items-center gap-2"
              href={
                "mailto:zecrackstechzecrakstech.com@gmail.com?subject=I%20am%20messaging%20from%20trezorwalletz.com"
              }
            >
              <FiMail />
              zecrackstechzecrakstech.com@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
