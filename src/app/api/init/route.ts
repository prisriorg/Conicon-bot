import { NextRequest, NextResponse } from "next/server";
// import imageThumbnail from "image-thumbnail";
export const runtime = "edge";
export async function POST(req: NextRequest) {
  let options = { percentage: 25, responseType: "base64" };

  // try {
  //   const thumbnail = await imageThumbnail("https://cataas.com/cat", {
  //     width: 50,
  //     height: 50,
  //     responseType: "base64",
  //   });
  //   console.log(thumbnail);
  // } catch (err) {
  //   console.error(err);
  // }
  const ddd = await req.json();
  // console.log(ddd);
  return NextResponse.json({ ddd });
}
