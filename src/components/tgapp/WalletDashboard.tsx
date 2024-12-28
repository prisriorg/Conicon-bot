import { useLaunchParams } from "@telegram-apps/sdk-react";
import React from "react";
import Image from "next/image";
import coin from "@/app/_assets/coin-3.svg";
const WalletDashboard = ({coins}:{coins:number}) => {
  const data = useLaunchParams().initData?.user;
  const name = data?.username
    ? data?.username
    : data?.firstName + " " + data?.lastName;

    const wallet = new Intl.NumberFormat('en-US').format(coins);
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={data?.photoUrl}
        className="w-1/6 rounded-full"
        alt={data?.firstName}
      />
      <h1 className="text-2xl">{name}</h1>
      <div className="flex justify-center items-center mt-4 gap-2">
        <Image src={coin} alt="wallet" className="w-[12%] border p-2 rounded-xl " />
        <h1 className="text-3xl font-semibold">{wallet}</h1>
      </div>
    </div>
  );
};

export default WalletDashboard;
