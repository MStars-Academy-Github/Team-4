import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Login from "../components/Login";
import Main from "../components/Main";
import { MainProps } from "../types/types";

const Home: NextPage = () => {
  const [checker, setChecker] = useState<boolean>(true);
  return (
    <div className="flex justify-center align-middle mt-24">
      {checker ? (
        <Login setChecker={setChecker} />
      ) : (
        <Main setChecker={setChecker} />
      )}
    </div>
  );
};

export default Home;
