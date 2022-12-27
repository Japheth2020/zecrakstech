import React, { useEffect } from "react";
import classes from "./Services.module.css";
import { HiOutlineMinusSm } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { GrBitcoin } from "react-icons/gr";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { GrStackOverflow } from "react-icons/gr";
import { AiTwotoneBank } from "react-icons/ai";
import Link from "next/link";

const data = [
  {
    title: "Lost Crypto-currency Recovery",
    image: <GrBitcoin />,
    description:
      "Recovery lost cryptocurrencies, bitcoin, ETH, USDT (ERC20), USDT (TRC20), BNB, lite coin, dogecoin, etc.",
  },
  {
    title: "Romance Scam Recovery",
    image: <IoHeartDislikeOutline />,
    description:
      "Recover lost money on dating apps, recover lost properties, recover lost loan to a romance scam, recover lost money from fake romance accounts.",
  },
  {
    title: "Investment Scam recovery",
    image: <GrStackOverflow />,
    description:
      "Recover lost investment funds, lost/frozen trading accounts, Mining scams, money doubling scams, and rugged trading platforms.",
  },
  {
    title: "Bank Transfer Scam/Money laundering",
    image: <AiTwotoneBank />,
    description:
      "Recover money sent to wrong bank account, bank unsettled transfer, E-transfer, MoneyGram, P2P transfers, cash deposit.",
  },
];

const ServiceCard = ({ props }: any) => {
  return (
   <Link href={"/wallets"} >
     <div className="flex flex-col group cursor-pointer ">
      <div className="flex items-center gap-4 p-4 group-hover:bg-pri group-hover:text-white animate duration-500 bg-white text-pri rounded-lg">
        <div className="group-hover:bg-pri bg-white text-[10em]  w-[50px] h-[50px] shadow-xl rounded-full flex items-center justify-center">
          {props.image}
        </div>
        <p className="font-[700] text-[1.5em]">{props.title} </p>
      </div>
      <div className=" group-hover:bg-white animate duration-500 group-hover:text-pri bg-blue-600 p-[2em]">
        <p className="text-[16px] font-[500] text-center leading-[2em]">
          {props.description}
        </p>
      </div>
    </div>
   </Link>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" text-white  bg-pri pt-[3em] ">
      <div className={`lg:px-[10em] md:px-[6em] px-[2em] py-[3em] h-full`}>
        <div className="flex md:flex-row flex-col md:justify-between gap-[2em] ">
          <div>
            <p
              className="text-blue-500 text-[18px] font-[500] flex items-center gap-2"
              // data-aos="fade-right"
            >
              <span className="text-[24px] font-[800] ">
                <HiOutlineMinusSm />
              </span>
              <span>Some of our Services</span>
            </p>

            <p
              className="font-[600] md:text-[3em] leading-[1.3em] mt-4"
              // data-aos="fade-right "
            >
              We influence lives! Our services aid vitims of crypto scams, with
              timely recovery of their funds. We also provide a wide range of
              services to help you protect your funds and assets from cyber
              threats.
            </p>
          </div>
          <p className="text-[18px] ">
            Whether you’ve lost money in your capacity as an investor, trader,
            miner, shopper, romance scam victim, or online user, we’re capable
            to help you in our specialization as a consultant, legal aid,
            recovery agent, or with support and information.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-[5em] gap-[3em]">
          {data.map((item, index) => {
            return <ServiceCard key={index} props={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
