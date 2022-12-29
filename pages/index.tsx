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
  console.log(articles);
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  var res = await axios.get(`${server}/api/articles`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  // var res = JSON.stringify(res.data);
  console.log("res ", res);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles: JSON.parse(JSON.stringify(res.data)),
    },
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles: JSON.parse(articles),
//     },
//   }
// }
