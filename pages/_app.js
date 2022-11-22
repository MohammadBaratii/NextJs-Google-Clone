import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress height={5} color={"#3b82f6"} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
