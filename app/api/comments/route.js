import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { age: 30, name: "oo" },
    { age: 40, name: "oo2" },
  ]);
}
