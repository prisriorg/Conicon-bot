"use server";
import { LaunchParams } from "@telegram-apps/sdk-react";
export async function addUsers(params: LaunchParams) {
  console.log(JSON.stringify(params?.initData?.user));
  return { text: "Hello, World!" };
}
export async function setWallet(address: string) {
  console.log(address);
}
