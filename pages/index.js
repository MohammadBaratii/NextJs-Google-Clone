import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

export default function Home() {
  const SearchInputRef = useRef();

  return (
    <>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-8 mt-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google Icon"
          width="160"
          height="55"
          priority
          className="w-40 m-auto object-cover sm:w-64"
        />
        <SearchInput ref={SearchInputRef} />
        <div className="flex gap-3">
          <button
            className="p-4 py-2 bg-neutral-100 rounded hover:ring-1 hover:ring-neutral-300"
            onClick={() => SearchInputRef.current.handleSearch()}
          >
            Google Search
          </button>
          <button className="p-4 py-2 bg-neutral-100 rounded hover:ring-1 hover:ring-neutral-300">
            I'm Feeling Lucky
          </button>
        </div>
      </main>
    </>
  );
}
