import React, { useEffect } from "react";
import { HiOutlineMinusSm } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { MdGpsFixed } from "react-icons/md";



const ServiceCard = ({ article }: any) => {
  // console.log("prps; ", article)
  return (
    <Link href={`/article/${article._id}`}>
      <div className="flex flex-col group cursor-pointer ">
        <div className="flex items-center gap-4 p-4 group-hover:bg-pri group-hover:text-white animate duration-500 bg-white text-pri rounded-lg">
          <div className="group-hover:bg-pri bg-white text-[10em]  w-[50px] h-[50px] shadow-xl rounded-full flex items-center justify-center">
           <MdGpsFixed />
          </div>
          <p className="font-[700] text-[1.5em]">{article.title} </p>
        </div>
        <div className=" group-hover:bg-white animate duration-500 group-hover:text-pri bg-blue-600 p-[2em]">
          <p className="text-[16px] font-[500] text-center leading-[2em]">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Services = ({ articles }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);
  console.log(articles);
  

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
              Lives are impacted by us! With the rapid recovery of their assets,
              our services help victims of cryptocurrency frauds. Additionally,
              we offer a variety of services to assist you in safeguarding your
              money and valuables against online threats.
            </p>
          </div>
          <p className="text-[18px] ">
            We are able to assist you in our area of expertise as a consultant,
            legal assistance, recovery agent, or with support and information,
            whether you have lost money in your role as an investor, trader,
            miner, shopper, victim of a romantic scam, or online user.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-[5em] gap-[3em]">
          {articles?.slice(0, 4)?.map((item:any, index:any) => <ServiceCard key={index} article={item}  />)}
        </div>
      </div>
    </div>
  );
};

export default Services;
