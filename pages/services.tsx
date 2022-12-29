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
      articles,
    },
  }
}


export default services;
