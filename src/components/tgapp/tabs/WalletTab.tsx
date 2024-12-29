import React from "react";
import { BiTransferAlt } from "react-icons/bi";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";
import tonicon from "@/app/_assets/ton-logo.svg";
import pawsicon from "@/app/_assets/logo-new.svg";
import Image from "next/image";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
const WalletTab = () => {
  const [walletBal, setWalletBal] = React.useState(0);
  const [address, setAddress] = React.useState<string | null>(null);
  const wallet = useTonWallet();
  const addresss = useTonAddress(true);
  React.useEffect(() => {
    if (addresss) {
      setAddress(addresss);
    }
  }, [addresss]);

  const data = [
    { id: 1, name: "TON", balance: 65, icon: tonicon },
    { id: 2, name: "CONICON", balance: 0, icon: pawsicon },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-semibold text-white">$ 65</h1>
      <p className="text-base font-medium text-[#7c7c7c]">Total Balance</p>

      <div className="flex justify-center items-center mt-9">
        <TonConnectButton />
      </div>
      <div className="flex flex-row items-center justify-around w-full mt-8">
        <button className="flex flex-col items-center gap-2">
          <HiArrowUp className="w-12 h-12 bg-[#171717] rounded-full p-2" />
          <h2 className="text-base font-medium text-white">Send</h2>
        </button>
        <button className="flex flex-col items-center gap-2">
          <HiArrowDown className="w-12 h-12 bg-[#171717] rounded-full p-2" />
          <h2 className="text-base font-medium text-white">Receive</h2>
        </button>
        <button className="flex flex-col items-center gap-2">
          <BiTransferAlt className="w-12 h-12 bg-[#171717] rounded-full p-2" />
          <h2 className="text-base font-medium text-white">History</h2>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-[10%] gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-[#171717] rounded-xl w-full p-4 "
          >
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={item.icon}
                  alt="ton"
                  width={40}
                  height={30}
                  className={``}
                />
                <div>
                  <div className="text-lg font-medium text-white">
                    {item.name}
                  </div>
                  <div className="text-sm font-medium text-[#7c7c7c]">
                    ${walletBal}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-lg font-medium text-white">
                  {item.balance}
                </div>
                <div className="text-sm font-medium text-[#7c7c7c]">
                  CONICON
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletTab;
