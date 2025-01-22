import { db } from "@/db";
import { fooTable } from "@/db/schema";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const name = await db.select().from(fooTable).all();

  return NextResponse.json(name);
}
