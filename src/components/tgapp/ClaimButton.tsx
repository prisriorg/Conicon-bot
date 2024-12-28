import React, { useState } from "react";

const ClaimButton = ({ claim, user }: { claim: boolean; user: number }) => {
  const [onClaim, setOnClaim] = useState(claim);
  return (
    <div className="flex justify-between items-center gap-4 bg-[#151515] rounded-xl transition transform scale-105 mt-6 m-2 p-4">
      <div className="flex flex-col ">
        <h1 className="text-lg font-bold text-green-400 transition duration-700">
          {onClaim ? "Active " + user + "x" : "Claim Now"}
        </h1>
        <p className="text-gray-400 text-sm">Next Claim after 12h 25m</p>
      </div>
      <button
        className="text-black bg-white px-3 p-1 rounded-lg"
        onClick={() => setOnClaim(true)}
        disabled={onClaim}
      >
        {onClaim ? "Claimed" : "Claim"}
      </button>
    </div>
  );
};

export default ClaimButton;
