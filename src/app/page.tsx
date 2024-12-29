"use client";

import { Page } from "@/components/Page";
import ClaimButton from "@/components/tgapp/ClaimButton";
import WalletDashboard from "@/components/tgapp/WalletDashboard";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";

import { TabProvider } from "@/contexts/TabContext";
import BottomNavBar from "@/components/tgapp/BottomNavBar";
import ContainerBox from "@/components/tgapp/ContainerBox";

export default function Home() {
  const initData = useLaunchParams();

  useEffect(() => {}, [initData]);

  return (
    <Page back={false}>
      <TabProvider>
        <ContainerBox />
        <BottomNavBar />
      </TabProvider>
    </Page>
  );
}
