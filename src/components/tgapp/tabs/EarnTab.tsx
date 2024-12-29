import React from "react";

import Image from "next/image";
import coin from "@/app/_assets/coin-3.svg";

const EarnTab = () => {
  const [activeTab, setActiveTab] = React.useState("ads");
  const tasks: { icon: string; title: string; reward: string }[] = [
    {
      icon: coin.src,
      title: "Watch a video",
      reward: "+ 5,000",
    },
    {
      icon: coin.src,
      title: "Join Comunnity",
      reward: "+ 2,000",
    },
    // Add more tasks as needed
  ];

  const partnerTasks: { icon: string; title: string; reward: string }[] = [
    {
      icon: coin.src,
      title: "Join Blum Channel",
      reward: "+ 1,000 PAWS",
    },
  ];
  return (
    <div className={`transition-all duration-300`}>
      <div className="flex gap-0 mt-4">
        <button
          onClick={() => setActiveTab("ads")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition duration-300 
                        ${
                          activeTab === "ads"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          Watch Ads
        </button>
        <button
          onClick={() => setActiveTab("partners")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition duration-300 
                        ${
                          activeTab === "partners"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          Partners
          {/* <div className="bg-[#5a5a5a] text-[#fefefe] size-4 rounded-full flex items-center justify-center text-[11px]">
            1
          </div> */}
        </button>
      </div>

      {/* Tasks List */}
      <div className="mt-4 mb-20">
        {(activeTab === "partners" ? partnerTasks : tasks).map(
          (task, index) => (
            <div
              key={index}
              className="flex items-center bg-[#151516]  mb-2  rounded-xl"
            >
              <div className="w-[72px] flex justify-center">
                {" "}
                {/* Fixed width container for icons */}
                <div className="w-10 h-10  bg-black p-2 rounded-xl border">
                  {" "}
                  {/* Fixed size container */}
                  {typeof task.icon === "string" ? (
                    <Image
                      src={task.icon}
                      alt={task.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="w-full h-full" />
                  )}
                </div>
              </div>
              <div
                className={`flex items-center justify-between w-full py-4 pr-4 ${
                  index !== 0 && "border-t border-[#222622]"
                }`}
              >
                <div>
                  <div className="text-[17px]">{task.title}</div>
                  <div className="text-gray-400 text-[14px]">{task.reward}</div>
                </div>
                <button className="h-8 bg-white text-black px-4 rounded-full text-sm font-medium flex items-center">
                  Start
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default EarnTab;
