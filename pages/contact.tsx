import Head from "next/head";
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const contact = () => {
  return (
    <>
      <Head key={3}>
        <title>CONTACT</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:px-[10rem] md:p-[6em] p-[1em]  py-[6em]">
          <div className="flex lg:flex-row gap-x-[5rem] flex-col gap-y-[4rem] w-full ">
            <div className="flex flex-col gap-[2rem] ">
              <p className="text-[3em] font-[600] ">GET IN TOUCH</p>
              <div>
                <h1 className="text-[14px]">PHONE</h1>
                <div className="flex items-center gap-x-[1em] ">
                  <div className="md:p-4 p-2 rounded-full bg-pri  text-white flex items-center justify-center font-[900] md:text-[3em] text-[2em]  ">
                    <BsTelephoneForward />
                  </div>
                  <p className="md:text-[2em] font-[500] "> +1 (248) 295‑1046</p>
                </div>
              </div>
              <div>
                <h1 className="text-[14px]">TELEGRAM</h1>
                <div className="flex items-center gap-x-[1em] ">
                  <div className="md:p-4 p-2 rounded-full bg-pri  text-white flex items-center justify-center font-[900] md:text-[3em] text-[2em]  ">
                    <FaTelegramPlane />
                  </div>
                  <p className="md:text-[2em] font-[500] ">zecrackstech</p>
                </div>
              </div>
              <div>
                <h1 className="text-[14px]">EMAIL</h1>
                <div className="flex items-center gap-x-[1em] ">
                  <div className="md:p-4 p-2 rounded-full bg-pri  text-white flex items-center justify-center font-[900] md:text-[3em] text-[2em]  ">
                    <AiOutlineMail />
                  </div>
                  <p className="md:text-[2em] font-[500] ">
                    {" "}
                    zecrackstechzecrakstech@gmail
                  </p>
                </div>
              </div>
            </div>
            <div className="md:p-[4rem] p-[2rem] bg-gray-100 shadow-2xl text-[16px]  w-full flex flex-col gap-y-[3rem]">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="py-[1em] px-[1em]  w-full"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  required={true}

                />
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <input
                  className="py-[1em] px-[1em]  w-full"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required={true}

                />
              </div>
              <div>
                <label htmlFor="name">Phone Number</label>
                <input
                  className="py-[1em] px-[1em]  w-full"
                  placeholder="Phone"
                  type="phone"
                  name="phone"
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea
                  className="py-[1em] px-[1em]  w-full"
                  placeholder="Message"
                  cols={30}
                  rows={10}
                  name="message"
                  required={true}
                />
              </div>

              <button className="bg-pri text-white py-[1em] px-[1em]  w-full">
                SEND
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
