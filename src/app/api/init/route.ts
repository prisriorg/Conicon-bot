import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export async function POST(req: NextRequest) {
  
  const ddd = await req.json();
  // console.log(ddd);
  return NextResponse.json({ ddd });
}
