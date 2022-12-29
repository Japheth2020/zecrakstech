import Head from "next/head";
import React from "react";
import What from "../components/What";
import Services_2 from "../components/Services/Services_2";
import { server } from "../config";

const services = ({articles}:any) => {
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
        <Services_2 articles={articles} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles: JSON.parse(articles),
    },
  }
}



export default services;


// export const getStaticProps = async () => {
//   var res = await axios.get(`${server}/api/articles`, {
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "User-Agent": "*",
//     },
//   });
//   const articles = JSON.stringify(res.data)
//   console.log("rt: ", articles)

//   return {
//     props: {
//       articles : JSON.parse(articles),
//     },
//   };
// };
