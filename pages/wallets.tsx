import React from "react";
import { coins } from "../public/images";
import WalletCard from "../components/WalletCard";
import Head from "next/head";

const wallets = () => {
  return (
    <>
      <Head key={4}>
        <title>SERVICES</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:px-[10em] md:px-[6rem] px-[1rem] flex py-[2em] ">
          <div className="m-auto">
            <div className="my-[4em] text-center">
              <p className="font-[900] md:text-[5em] text-[3em]">ZECRAKSTECH</p>
              <p className="bg-pri p-4 text-white">
                Conect your wallet to get started
              </p>
            </div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-[5rem] gap-y-[3rem]">
              {coins.map((coins, index) => {
                return <WalletCard key={index} props={coins} s />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default wallets;
