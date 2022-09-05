import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Main from "../components/Main";
import { MainProps } from "../types/types";

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

// Home.getInitialProps = async () => {
//   const res = await fetch("http://localhost:4000/v1/media/videos").then(
//     (res) => {
//       console.log(res);
//     }
//   );
//   const videos = res;
//   console.log(videos);
//   return {
//     videos: videos,
//   };
// };

export default Home;
