"use client";

import { Page } from "@/components/Page";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect } from "react";

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
