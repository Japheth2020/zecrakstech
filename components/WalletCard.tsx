import Image from "next/image";
import Link from "next/link";
import React from "react";

const WalletCard = ({ props, setWallet }: any) => {

  return (
    <Link href={{ pathname: '/connect', query: { data: JSON.stringify(props) } }}>
      <div
        
        className="text-center flex flex-col items-center bg-pri h-[13em] w-[13em] rounded-md cursor-pointer text-white hover:bg-blue-800 animate duration-500 group"
      >
        <Image alt={props.name} src={props.image} width={100} height={100} />
        <p className="font-[600] text-[16px] group-hover:text-[18px] animate duration-500 ">
          {props.name}
        </p>
      </div>
    </Link>
  );
};

export default WalletCard;
