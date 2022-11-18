import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center gap-8 mt-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google Icon"
          width="160"
          height="55"
          priority
          className="w-40 m-auto object-cover sm:w-64"
        />
        <div className="relative w-full max-w-xl px-5">
          <button className="absolute top-1/2 left-9 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button className="absolute top-1/2 right-9 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
              <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
          </button>
          <input
            type="text"
            className="w-full max-w-xl p-2 px-10 border border-neutral-200 rounded-full outline-none hover:shadow-[0_1px_6px_#ccc]"
          />
        </div>
        <div className="flex gap-3">
          <button className="p-4 py-2 bg-neutral-100 rounded hover:ring-1 hover:ring-neutral-300">
            Google Search
          </button>
          <button className="p-4 py-2 bg-neutral-100 rounded hover:ring-1 hover:ring-neutral-300">
            I'm Feeling Lucky
          </button>
        </div>
      </main>
    </div>
  );
}
