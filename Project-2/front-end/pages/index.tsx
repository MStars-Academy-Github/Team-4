import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Login from "../components/Login";
import Main from "../components/Main";

const Home: NextPage = () => {
  const [checker, setChecker] = useState<boolean>(true);
  return (
    <div className="flex justify-center align-middle mt-24">
      {checker ? <Login setChecker={setChecker} /> : <Main />}
    </div>
  );
};

export default Home;
