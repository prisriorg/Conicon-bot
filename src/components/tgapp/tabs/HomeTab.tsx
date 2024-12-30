import React from "react";
import WalletDashboard from "../WalletDashboard";
import ClaimButton from "../ClaimButton";

const HomeTab = () => {
  return (
    <>
      <WalletDashboard coins={23456789} />
      <ClaimButton claim={false} user={0} />

      <div
        className={`p-4 flex items-center justify-between border-b-[1px] border-[#222622] bg-[#2d2b1b] rounded-t-2xl`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 p-1.5 bg-white rounded-lg"></div>
          <div>
            <div className="text-base font-medium">{45678}</div>
            <div className="text-sm font-medium text-[#7c7c7c]">
              {5678} PAWS
            </div>
          </div>
        </div>
        <div className={`text-base font-medium text-white`}>{"jiggvb"}</div>
      </div>
    </>
  );
};

export default HomeTab;
