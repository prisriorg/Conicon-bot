import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  return NextResponse.json(name);
}
