import Head from "next/head";
import { Inter } from "@next/font/google";

import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services/Services";
import Testimony from "../components/Testimony";
import Showcase from "../components/Showcase/Showcase";
import Tablet from "../components/Tablet";
import { server } from "../config";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: any) {
  console.log(articles)
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
        <Services articles={articles} />
        {/* <Skilled /> */}
        <Testimony />
        <Tablet />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  var res = await axios.get(`${server}/api/articles`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  const articles = JSON.stringify(res.data)
  console.log("rt: ", articles)

  return {
    props: {
      articles : JSON.parse(articles),
    },
  };
};
