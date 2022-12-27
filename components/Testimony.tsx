import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const data = [
  {
    name: "Lyne",
    location: "New York",
    image: "/images/m_1.jpg",
    testimony:
      "I applied for a job recently and couldn't get it because I was setup about 7 years ago which got me a bad record, I was recommended to ZECRAKSTECH and after 24 hour they got the bad record on my name cleared.									",
  },
  {
    name: "Bridget",
    location: "Canada",
    image: "/images/f_1.jpg",
    testimony:
      "I Contacted this trading platform about 5 months now lol, I am retired and wanted to save up my pension, so when I saw many recommendations about them I decided to try them out. I started with a little investment of €1,800 and it looks like I was making good profit not know I was only getting scammed, I would never forget how I invested all my life savings into this trading platform and I stopped getting replies from them. I was about to take my life due to depression on how to take care of my sick daughter but a friend told me About this ZECRAKSTECH, I doubt them at first but after making research I went ahead with the recovery, I asked my self what’s there to lose. After providing all the info he requested, within 48 hours of hard work I received a notification of €15,340 to my wallet, followed with another notification of €32,709 until all my balance was completed. I sent them 10% of the total money as appreciation.										",
  },
  {
    name: "Raj",
    location: "UK",
    image: "/images/m_2.jpg",
    testimony:
      "GOOD JOB ZECRAKSTECH, Your agents were fast to help me in retrieving my 456800 USDT, Massive respect and love to every of your team who work behind the scenes to make sure people get the help they deserve",
  },
  {
    name: "Bernedette",
    location: "UK",
    image: "/images/f_2.jpg",
    testimony:
      "Thanks for helping me with my lost BTCs, noice work ZECRAKSTECH, I will recommend you to everyone I know.",
  },
];

const TestimonyCard = ({ props }: any) => {
  return (
    <div className="">
      <div className=" bg-white overflow-hidden shadow-2xl flex items-center  flex-col py-[2em]">
        <div>
          <div className="rounded-full bg-gray-100 h-[15em] w-[15em] overflow-hidden shadow-xl flex items-center justify-center">
            <img height={200} width={200} src={props.image} alt="" />
          </div>
          <div className="">
            <p className="font-[600] text-[2em] leading-[1em]">{props.name}</p>
            <p className="text-blue-600 font-[600] ">{props.location}</p>
            <div className="flex items-center justify-center ">
              <p className="text-yellow-500">
                <AiFillStar />
              </p>
              <p className="text-yellow-500">
                <AiFillStar />
              </p>
              <p className="text-yellow-500">
                <AiFillStar />
              </p>
              <p className="text-yellow-500">
                <AiFillStar />
              </p>
              <p className="text-yellow-500">
                <AiFillStar />
              </p>
            </div>
          </div>
        </div>

        <div className="p-[3em] text-center h-contain break-normal md:w-[40em] w-[30em]">
          <p className="md:text-[1.5em] font-[400] text-[#1A1A1A] ">
            <i>{props.testimony}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimony = () => {
  return (
    <div className="lg:px-[10em] md:px-[6em] px-[1em] py-[2em]  ">
      <div className=" text-center ">
        <h1 className="font-[600] text-[4em] leading-[1em] ">Testimony</h1>
        <p className="font-[500] text-[1.5em] ">What They're talking</p>
        <div className="mt-[3rem] flex  gap-4 overflow-scroll scrollbar-hide">
          {data.map((props) => {
            return <TestimonyCard props={props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
