import { useTab } from "@/contexts/TabContext";
import React from "react";
import { tabs } from "./BottomNavBar";

const ContainerBox = () => {
  const { activeTab } = useTab();
  return (
    <div className="overflow-hidden max-w-md mx-auto pt-[20px] pb-[72px] px-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            className={`${isActive ? "block" : "hidden"} w-full h-full`}
          >
            <tab.component />
          </div>
        );
      })}
    </div>
  );
};

export default ContainerBox;
