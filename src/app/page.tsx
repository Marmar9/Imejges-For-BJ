"use client"
import serverClient from "@/server/client";
export const dynamic = "force-dynamic";
import { trpc } from "./_trpc/client";
import { useEffect } from "react";

export default function Home() {
    // const data = await serverClient.protected.registerGame();

    const mutator = trpc.protected.registerGame.useMutation()

    return <main className="max-w-3xl mx-auto mt-5">
        <input type="file" />
        {JSON.stringify("ky4")}
        <button onClick={() => { mutator.mutate({ gameName: "Valorant", description: "Unfortunately uses vanguard" }) }}>Mutate</button>
    </main>;
}
