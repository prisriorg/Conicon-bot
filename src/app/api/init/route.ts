import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { fooTable } from "@/db/schema";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  
  try {
    //const ddd = await db.select().from(fooTable).all();

    return NextResponse.json({ "ddd":"" });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
