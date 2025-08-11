import { NextResponse } from "next/server";

const fakeDB = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
];

export async function GET() {
    return NextResponse.json(fakeDB);
}
