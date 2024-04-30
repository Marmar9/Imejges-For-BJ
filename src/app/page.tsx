import { serverClient} from "@/server";
export const dynamic = "force-dynamic";

export default async function Home() {

const data = await serverClient.getTodos();

  return (
    <main className="max-w-3xl mx-auto mt-5">
    {JSON.stringify(data)}
    </main>
  );
}
