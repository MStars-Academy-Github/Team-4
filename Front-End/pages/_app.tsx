import "../styles/globals.css";
import "../styles/login.css";
import { useEffect } from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   document.addEventListener("mousemove", function (e) {
  //     let body = document.querySelector("body");
  //     let heart = document.createElement("span");
  //     let x = e.offsetX;
  //     let y = e.offsetY;
  //     heart.style.left = x + "px";
  //     heart.style.top = y + "px";

  //     let size = Math.random() * 5;
  //     heart.style.width = 5 + size + "px";
  //     heart.style.height = 5 + size + "px";

  //     let transformValue = Math.random() * 360;
  //     heart.style.transform = "rotate(" + transformValue + "deg)";

  //     body?.appendChild(heart);

  //     setTimeout(function () {
  //       heart.remove();
  //     }, 1000);
  //   });
  // }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
