"use client"
import  serverClient  from "@/server/client";
export const dynamic = "force-dynamic";
import { trpc } from "./_trpc/client";

export default function Home() {
  // const data = await serverClient.getProjects();
    const data = trpc.getGames.useQuery()

  return <main className="max-w-3xl mx-auto mt-5">
  { JSON.stringify(data) } 
  </main>;
}
