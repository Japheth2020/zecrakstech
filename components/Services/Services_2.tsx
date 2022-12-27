import React, { useEffect } from "react";
import classes from "./Services.module.css";
import { HiOutlineMinusSm } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdGpsFixed } from "react-icons/md";

const data = [
  {
    title: "Lost Crypto-currency Recovery",
    description:
      "Recovery lost cryptocurrencies, bitcoin, ETH, USDT (ERC20), USDT (TRC20), BNB, lite coin, dogecoin, etc.",
  },
  {
    title: "Romance Scam Recovery",
    description:
      "Recover lost money on dating apps, recover lost properties, recover lost loan to a romance scam, recover lost money from fake romance accounts.",
  },
  {
    title: "Investment Scam recovery",
    description:
      "Recover lost investment funds, lost/frozen trading accounts, Mining scams, money doubling scams, and rugged trading platforms.",
  },
  {
    title: "Bank Transfer Scam/Money laundering",
    description:
      "Recover money sent to wrong bank account, bank unsettled transfer, E-transfer, MoneyGram, P2P transfers, cash deposit.",
  },
  {
    title: "Crypto Tracing",
    description:
      "Trace Cryptocurrency.crypto transactions, crypto user IP. crypto user address, usertitles, crypto user background check",
  },
  {
    title: "Swap/Exchange",
    description: "Click here for any issues with swapping or exchanging",
  },
  {
    title: "Connect to Dapps",
    description: "Click here to connect to decentralized applications",
  },
  {
    title: "Login Isues",
    description: "Click here to see if you are having issues with logging in",
  },
  {
    title: "Missing Funds/Irregular token balance",
    description: "Click here to recover lost/missing funds",
  },
  {
    title: "Exhorbitant Gas Fees",
    description: "Click here to rectify",
  },
  {
    title: "Transaction Delay ",
    description: "Do you have issues with transactions taking too long?",
  },
  {
    title: "Issues with Trading Wallet",
    description: "Click here for any issues with trading wallet",
  },
  {
    title: "Unable to purchase coins",
    description: "Click here to rectify",
  },
];

const ServiceCard = ({ props }: any) => {
  return (
    <div className="flex flex-col group cursor-pointer ">
      <div className="flex items-center gap-4 p-4 group-hover:bg-pri group-hover:text-white animate duration-500 bg-white text-pri rounded-lg">
        <div className="group-hover:bg-pri bg-white text-[10em]  w-[50px] h-[50px] shadow-xl rounded-full flex items-center justify-center">
        <MdGpsFixed />
        </div>
        <p className="font-[700] text-[1.5em]">{props.title} </p>
      </div>
      <div className=" group-hover:bg-white animate duration-500 group-hover:text-pri bg-blue-600 p-[2em]">
        <p className="text-[16px] font-[500] text-center leading-[2em]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

const Services_2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" text-white  bg-pri pt-[3em] ">
      <div className={`lg:px-[10em] md:px-[6em] px-[2em] py-[3em] h-full`}>
      

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-[5em] gap-[3em]">
          {data.map((item, index) => {
            return <ServiceCard key={index} props={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services_2;
