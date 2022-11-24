import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress height={5} color={"#3b82f6"} />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
