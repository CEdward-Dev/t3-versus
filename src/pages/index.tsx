import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0);

  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  //let homeScore = 0;
  //let awayScore = 0;

  const incrementHomeScore = () => {
    return setHomeScore(homeScore + 1)
  }

  const incrementAwayScore = () => {
    return setAwayScore(awayScore + 1);
  };

  const decrementHomeScore = () => {
    return setHomeScore(homeScore - 1);
  };

  const decrementAwayScore = () => {
    return setAwayScore(awayScore - 1);
  };

  const resetHomeScore = () => {
    return setHomeScore(0);
  };

  const resetAwayScore = () => {
    return setAwayScore(0);
  };

  return (
    <>
      <Head>
        <title>Versus Scoreboard</title>
        <meta name="description" content="Versus Scoreboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-gradient-to-br text-slate-200 from-[#2e026d] to-[#440658]">
        <header className="flex h-[7%] flex-row items-center justify-between">
          <h1 className="p-5 text-xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="text-[hsl(220,100%,70%)]">Versus</span> Scoreboard
          </h1>
          <div className="p-5 text-5xl text-slate-200">=</div>
        </header>

        <div className="flex h-[80%] w-full flex-row items-center justify-between gap-12">
          <div className="flex h-full w-1/4 flex-col items-center rounded-xl bg-gradient-to-l from-violet-800 to-violet-950 opacity-60">
            Home Team
          </div>

          <div className="flex w-1/2 flex-row justify-around self-center text-slate-200">
            <div className="flex h-auto flex-col items-center gap-0">
              <h4>Home</h4>
              <h1 className="text-[15rem] leading-[12rem]">{homeScore}</h1>
              <h4 className="pt-5">Home Team Name</h4>
            </div>
            <h2 className="pt-5 text-[8rem] text-slate-200"> - </h2>
            <div className="flex flex-col items-center">
              <h4>Away</h4>
              <h1 className="text-[15rem] leading-[12rem]">{awayScore}</h1>
              <h4 className="pt-5">Away Team Name</h4>
            </div>
          </div>
          {/* <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}

          <div className="flex h-full w-1/4 flex-col items-center justify-self-end rounded-xl bg-gradient-to-l from-violet-950 to-violet-800 opacity-60">
            Away Team
          </div>
        </div>

        <div className="flex h-[13%] w-full flex-col items-center justify-center text-slate-200">
          <div className="text-xl uppercase">[Sport] Controls</div>
          <div className="flex w-full flex-row justify-around">
            <div className="flex w-1/2 flex-col items-center">
              <h2>Home Team</h2>
              <div className="flex flex-row p-1">
                <button className="w-16 m-1 bg-lime-700" onClick={incrementHomeScore}>+1</button>
                <button className="w-16 m-1 bg-rose-700" onClick={decrementHomeScore}>-1</button>
                <button className="w-16 m-1 bg-amber-700" onClick={resetHomeScore}>Reset</button>
              </div>
            </div>
            <div className="flex w-1/2 flex-col items-center">
              <h2>Away Team</h2>
              <div>
                <button className="w-16 m-1 bg-lime-700" onClick={incrementAwayScore}>+1</button>
                <button className="w-16 m-1 bg-rose-700" onClick={decrementAwayScore}>-1</button>
                <button className="w-16 m-1 bg-amber-700" onClick={resetAwayScore}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
