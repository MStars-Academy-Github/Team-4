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
import Register from "../components/Register";

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
  const [check, setCheck] = useState<boolean>();

  function checker(e: boolean) {
    setCheck(e);
  }
  useEffect(() => {
    if (localStorage.getItem("result")) {
      setCheck(true);
    }
  }, [check]);

  return check ? (
    <Component {...pageProps} />
  ) : (
    <Login /> || <Register setChecker={undefined} />
  );
}

export default MyApp;
