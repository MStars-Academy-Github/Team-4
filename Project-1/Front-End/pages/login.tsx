import React from "react";
import Login from "../components/Login";
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
type Props = {};

const login = (props: Props) => {
  const [result, setResult] = useState<Result>();
  const router = useRouter();
  useEffect(() => {
    if (result !== undefined && result.success) {
      localStorage.setItem("result", JSON.stringify(result));
      console.log(result);

      router.push("/main");
    }
  }, [result]);
  return (
    <div>
      <Login
        checker={function (e: boolean): {} {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default login;
