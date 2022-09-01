import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Main from "../components/Main";

const Home: NextPage = () => {
  const [checker, setChecker] = useState<boolean | undefined>();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setChecker(false);
    } else {
      setChecker(true);
    }
  }, [checker]);
  return (
    <div className="flex justify-center align-middle ">
      {checker ? (
        <Login setChecker={setChecker} />
      ) : (
        <Main setChecker={setChecker} />
      )}
    </div>
  );
};

export default Home;
