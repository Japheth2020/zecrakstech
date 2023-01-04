import Head from "next/head";
import React from "react";
import What from "../components/What";
import Services_2 from "../components/Services/Services_2";
import { server } from "../config";
import axios from "axios";
import client from "../sanity";

const services = ({articles}:any) => {
  return (
    <>
      <Head key={2}>
        <title>SERVICES</title>
        <meta
          property="og:title"
          content="Services - Zecrakstech For all your wallet issues"
        />
        <meta
          property="og:description"
          content="Zecrakstech For all your wallet issues"
        />
        <meta property="og:url" content="https://zecrakstech.com/services" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Zecrakstech For all your wallet issues"
        />
        <meta name="keywords" content="Zecrakstech, wallet, issues, wallet services" />
        <meta name="author" content="Zecrakstech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zecrakstech" />
        <meta name="twitter:creator" content="@zecrakstech" />
        <meta
          name="twitter:title"
          content="Home - Zecrakstech For all your wallet issues"
        />
        <meta
          name="twitter:description"
          content="Zecrakstech For all your wallet issues"
        />

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
  const articles = await client.fetch(`*[_type == "article"]`);
  // const articles = await res.json()

  return {
    props: {
      articles
    },
  }
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library

//   var res = await axios.get(`${server}/api/articles`, {
//     headers: {
//       Accept: "application/json",
//       "User-Agent": "*",
//     },
//   });
//   // var res = JSON.stringify(res.data);
//   console.log("res ", res);

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       articles: JSON.parse(JSON.stringify(res.data)),
//     },
//   };
// }



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
