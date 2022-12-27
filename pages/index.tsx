import Head from "next/head";
import { Inter } from "@next/font/google";

import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services/Services";
import Testimony from "../components/Testimony";
import Showcase from "../components/Showcase/Showcase";
import Tablet from "../components/Tablet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Showcase />
        <WhatWeDo />
        <Services />
        {/* <Skilled /> */}
        <Testimony />
        <Tablet />
     
      </main>
    </>
  );
}
