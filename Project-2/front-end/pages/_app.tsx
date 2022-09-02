import "../styles/globals.css";
import "../styles/login.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { type } from "os";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="mainContainer">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
