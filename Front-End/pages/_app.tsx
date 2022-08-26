import "../styles/globals.css";
import "../styles/login.css";
import "../styles/main.css";
import "../styles/filtUser.css";
import "../styles/userUpdate.css";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { AppProps } from "next/app";
type Result = {
  data: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    imgUrl: string;
    password: string;
    gender: string;
    age: number;
    __v: number;
  };
  message: string;
  success: boolean;
};

function MyApp({ Component, pageProps }: AppProps) {
  // const [users, setUser1] = useState<any>();
  const [result, setResult] = useState<Result>();
  const [check, setCheck] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const router = useRouter();
  let checkerBoolean;
  function checker(e: boolean) {
    // console.log(e);
    setCheck(e);
    return e;
  }
  console.log(check);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("result") || "[]");
    if (items) {
      setItems(items);
      setCheck(true);
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
  return check ? <Component {...pageProps} /> : <Login checker={checker} />;
}

export default MyApp;
