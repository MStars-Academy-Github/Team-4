import React from "react";
import { LoginProps } from "../types/types";
import axios from "axios";
// import axios
export default function Login({ setChecker }: LoginProps) {
  async function submitHandler(e: any) {
    e.preventDefault();
    console.log(e.target[0].value);
    const data = { email: e.target[0].value, password: e.target[1].value };
    axios
      .post("http://localhost:4000/v1/auth/login", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="flex justify-center m-auto ">
      <form
        action="submit"
        className="flex-col flex bg-white w-[300px] p-4 text-white"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" name="email" placeholder="email" className="mb-2" />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mb-2"
        />
        <button className="text-black">LOGIN</button>
      </form>
    </div>
  );
}
