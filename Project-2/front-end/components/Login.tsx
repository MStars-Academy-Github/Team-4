import React, { useState } from "react";
import { LoginProps } from "../types/types";
import axios from "axios";
import Register from "./Register";
// import axios
export default function Login({ setChecker }: LoginProps) {
  const [comp, setComp] = useState<boolean>(true);
  async function submitHandler(e: any) {
    e.preventDefault();
    localStorage.clear();
    console.log(e.target[0].value);
    const data = { email: e.target[0].value, password: e.target[1].value };
    axios
      .post("http://localhost:4000/v1/auth/login", { data })
      .then((res) => {
        console.log(res.data);
        if (res.data.success && res.data !== "undefined") {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setChecker(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return comp ? (
    <div className="loginContainer m-auto flex flex-col absolute top-[20%] left-[35%]">
      <img
        src="./pictures/Chitube.png"
        className="loginLogo w-[250px] h-[200px]"
        alt=""
      />
      <form
        action="submit"
        className="loginForm flex-col flex bg-white w-[300px] p-4 text-white"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          className="mb-2 cursor-text"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mb-2 cursor-text"
        />
        <div className="flex justify-between">
          <button className="text-black cursor-pointer">LOGIN</button>
          <input
            type="button"
            value="REGISTER"
            className=" text-red-900 cursor-pointer"
            onClick={() => {
              setComp(false);
            }}
          />
        </div>
      </form>
    </div>
  ) : (
    <Register setComp={setComp} />
  );
}
