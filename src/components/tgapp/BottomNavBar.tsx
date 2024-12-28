import { TabType, useTab } from "@/contexts/TabContext";
import { AiFillHeart, AiFillHome, AiOutlineHeart, AiOutlineHome , AiFillBank, AiOutlineBank } from "react-icons/ai";
import { RiStockFill, RiStockLine } from "react-icons/ri";
import { IoWallet,IoWalletOutline } from "react-icons/io5";
import HomeTab from "./tabs/HomeTab";
import ReferTab from "./tabs/ReferTab";
import ValueTab from "./tabs/ValueTab";
import EarnTab from "./tabs/EarnTab";
import WalletTab from "./tabs/WalletTab";

export const tabs: {
  id: TabType;
  label: string;
  Icon: React.FC<{ className?: string }>;
  ActiveIcon: React.FC<{ className?: string }>;
  component: React.FC<{ className?: string }>;
}[] = [
  { id: "home", label: "Home", Icon: AiOutlineHome, ActiveIcon: AiFillHome,component:HomeTab },
  { id: "earn", label: "Earn", Icon: AiOutlineBank, ActiveIcon: AiFillBank,component:EarnTab },
  { id: "refer", label: "Refer", Icon: AiOutlineHeart, ActiveIcon: AiFillHeart,component:ReferTab },
  { id: "value", label: "Value", Icon: RiStockLine , ActiveIcon: RiStockFill,component:ValueTab },
  { id: "wallet", label: "Wallet", Icon: IoWalletOutline, ActiveIcon: IoWallet,component:WalletTab },
];
const BottomNavBar = () => {
  const { activeTab, setActiveTab } = useTab();
  
  return (
    <div className="flex justify-center w-full ">
      <div className="fixed bottom-0 w-full max-w-sm bg-black">
        <div className="flex flex-row justify-around">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center bg-black  rounded-md  m-2 p-2`}
              >
                {!isActive?<tab.Icon
                  className={`w-6 h-6 ${
                    isActive ? "text-[#ffffff]" : "text-[#727272]"
                  }`}
                />:<tab.ActiveIcon
                  className={`w-6 h-6 ${
                    isActive ? "text-[#ffffff]" : "text-[#727272]"
                  }`} />}
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-[#ffffff]" : "text-[#727272]"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BottomNavBar;
