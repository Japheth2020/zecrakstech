import Head from "next/head";
import { Inter } from "@next/font/google";

import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services/Services";
import Testimony from "../components/Testimony";
import Showcase from "../components/Showcase/Showcase";
import Tablet from "../components/Tablet";
import { server } from "../config";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles}:any) {
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
        <Services articles = {articles} />
        {/* <Skilled /> */}
        <Testimony />
        <Tablet />
     
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
