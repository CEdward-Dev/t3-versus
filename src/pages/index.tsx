import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Versus Scoreboard</title>
        <meta name="description" content="Versus Scoreboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-gradient-to-br from-[#2e026d] to-[#440658]">
        <header className="flex h-[7%] flex-row items-center justify-between">
          <h1 className="p-5 text-xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="text-[hsl(220,100%,70%)]">Versus</span> Scoreboard
          </h1>
          <div className="p-5 text-5xl text-slate-200">=</div>
        </header>

        <div className="flex h-[80%] w-full flex-row items-center justify-between gap-12">
          <div className="flex h-full w-1/4 flex-col items-center bg-gradient-to-l from-slate-700 to-slate-900 opacity-40 rounded-xl">
            Home Team
          </div>
          <div className="flex w-1/2 flex-row justify-center self-start">
            <h1 className="text-[15rem] text-slate-200">0</h1>
            <h2 className="text-[14rem] text-slate-200"> - </h2>
            <h1 className="text-[15rem] text-slate-200">0</h1>
          </div>
          {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
          <div className="flex h-full w-1/4 flex-col items-center justify-self-end bg-gradient-to-l from-slate-900 to-slate-700 opacity-40 rounded-xl">
            Away Team
          </div>
        </div>

        <div className="flex h-[13%] w-full flex-col items-center justify-center text-slate-200">
          <div className="text-xl uppercase">Controls</div>
          <div className="flex w-full flex-row justify-around">
            <div className="flex w-1/2 flex-col items-center">
              <h2>Home Team</h2>
              <button bg-amber-700 w-16>
                Score
              </button>
            </div>
            <div className="flex w-1/2 flex-col items-center">
              <h2>Away Team</h2>
              <button className="w-16 bg-amber-700">Score</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
