import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const data = [
  {
    name: "Demare",
    location: "USA",
    image: "/images/m_1.png",
    testimony:
      "I just applied for a job but was unsuccessful because I had a negative record from a setup that occurred about 7 years ago. I was referred to ZECRAKSTECH, and within 24 hours they had my name cleaned of the bad record.",
  },
  {
    name: "Eubiasantiago",
    location: "Canada",
    image: "/images/f_1.png",
    testimony:
      "I've been in contact with this trading platform for almost five months now, hehe. Since I'm retired and need to save money for my pension, I decided to give them a try after seeing so many positive reviews. I began with a little investment of €1,800 and it appeared that I was generating a nice profit without realizing that I was only being duped. I will never forget how I put all of my life savings into this trading platform before they stopped responding to me. Due to my depression over how to care for my ill daughter, I was on the verge of suicide when a friend informed me about ZECRAKSTECH. At first, I didn't believe them, but after doing some research, I decided to move forward with the recovery since I reasoned that there was nothing to lose. After giving him all the information he needed, I worked hard for 48 hours before receiving a notification adding €15,340 to my wallet. This was followed by another notification adding €32,709 till my entire total was paid. I sent them a thank-you gift of 10% of the whole amount.",
  },
  {
    name: "Ajay",
    location: "USA",
    image: "/images/m_2.png",
    testimony:
      "GOOD JOB ZECRAKSTECH, Thanks so much to all of your team members that work tirelessly behind the scenes to ensure that individuals receive the assistance they need, your agents helped me quickly retrieve my 456800 USDT.",
  },
  {
    name: "Manjeet",
    location: "Canada",
    image: "/images/f_2.png",
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
            <Image height={200} width={200} src={props.image} alt="" />
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
        <p className="font-[500] text-[1.5em] ">What They are talking</p>
        <div className="mt-[3rem] flex  gap-4 overflow-scroll scrollbar-hide">
          {data.map((props, index) => {
            return <TestimonyCard key={index} props={props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
