import "../styles/globals.css";
import "../styles/login.css";
import "../styles/main.css";
import "../styles/filtUser.css";
import "../styles/userUpdate.css";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Login from "../components/Login";

import { useEffect } from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUser1] = useState<any>();
  useEffect(() => {
    if (localStorage.getItem("result")) {
      setUser1(JSON.parse(localStorage.getItem("result") || "result"));
    }
  }, []);
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
  return users ? <Component {...pageProps} /> : <Login />;
}

export default MyApp;
