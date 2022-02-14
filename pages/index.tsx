import type { NextPage } from "next";
import Head from "next/head";
import Wordle from "../components/wordle";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hashle - An obfuscated Wordle clone</title>
        <meta name="description" content="An obfuscated Wordle clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4 text-center">
        <h1 className="p-4 text-sky-600 text-5xl">Hashle</h1>
        <h2 className="p-4 text-xl">
          An obfuscated Wordle clone{" "}
          <a
            className="text-base text-sky-800"
            target="_blank"
            href="https://github.com/fernandezpablo85/hashle"
          >
            Learn more
          </a>
        </h2>
      </header>
      <main className="text-center min-h-[75vh]">
        <Wordle />
      </main>

      <footer className="">
        <div className="text-center text-white bg-sky-900">
          el sindicato 💪 - 2022
        </div>
      </footer>
    </div>
  );
};

export default Home;
