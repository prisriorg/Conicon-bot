"use client";

import { openLink } from "@telegram-apps/sdk-react";
import { Page } from "@/components/Page";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useClientOnce } from "@/hooks/useClientOnce";
import { useCallback, useState } from "react";
import { setWallet } from "@/services/actions";

export default function TONConnectPage() {
  const [address, setAddress] = useState<string | null>(null);
  const wallet = useTonWallet();
  const addresss = useTonAddress(true);
  const dd = useCallback(async () => {await setWallet(addresss);setAddress(addresss)}, [addresss]);
  useClientOnce(dd);

  return (
    <Page>
      {wallet && <div>Wallet: {address}</div>}
      <div className="flex justify-center items-center">
        <TonConnectButton />
      </div>

      <button onClick={() => openLink("https://ton.org")}>
        Connect wallet
      </button>
    </Page>
  );
}
