import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

const Home: NextPage = () => {
  const [result, setResult] = useState<Result>();
  const [check, setCheck] = useState<boolean>(false);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("result", JSON.stringify(result));
      setCheck(!check);
    }
  }, [check]);
  return (
    <div>
      {result !== undefined && result.success ? (
        <Main />
      ) : (
        <Login
          checker={function (e: boolean): {} {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
};

export default Home;
