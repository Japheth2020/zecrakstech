import Head from "next/head";
import Connect from "../components/Connect";


const connect = () => {

  return (
    <>
      <Head key={3}>
        <title>CONNECT</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Connect />
      </main>
    </>
  );
};

export default connect;
