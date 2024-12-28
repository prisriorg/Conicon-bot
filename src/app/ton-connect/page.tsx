"use client";

import { openLink } from "@telegram-apps/sdk-react";
import { Page } from "@/components/Page";
import { TonConnectButton, useTonAddress, useTonWallet } from "@tonconnect/ui-react";

export default function TONConnectPage() {
  const wallet = useTonWallet();
  
  const address = useTonAddress(true)
  
  return (
    <Page>
      {wallet && <div>Wallet: {address}</div>}
      <div className="flex justify-center items-center">= <TonConnectButton /></div>

      <button onClick={ ()=>openLink("https://ton.org")}>
        Connect wallet
      </button>
    </Page>
  );
}
