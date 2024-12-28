"use client";

import { useState, type PropsWithChildren } from "react";
import { miniApp, useLaunchParams, useSignal } from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useDidMount } from "@/hooks/useDidMount";
import { useClientOnce } from "@/hooks/useClientOnce";
import { init } from "@/core/init";

import "./styles.css";
import { addUsers } from "@/services/actions";
import HomeLoader from "../tgapp/HomeLoader";

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === "development";
  const [getData, setGetData] = useState(false);

  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";

  useClientOnce(() => {
    init(debug);
    (async () => {
      await addUsers(lp).then(() => {
        setTimeout(() => {
          setGetData(true);
        }, 1000);
      });
    })();
  });

  const isDark = useSignal(miniApp.isDark);

  return getData ? (
    <TonConnectUIProvider manifestUrl="https://conicon.pages.dev/tonconnect-manifest.json">
      <AppRoot
        appearance={isDark ? "dark" : "light"}
        platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  ) : (
    <HomeLoader />
  );
}

export function Root(props: PropsWithChildren) {
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <HomeLoader />
  );
}
