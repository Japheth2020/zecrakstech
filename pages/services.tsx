import Head from "next/head";
import React from "react";
import What from "../components/What";
import Services_2 from "../components/Services/Services_2";

const services = () => {
  return (
    <>
      <Head key={2}>
        <title>SERVICES</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <What />
        <Services_2 />
      </main>
    </>
  );
};

export default services;
