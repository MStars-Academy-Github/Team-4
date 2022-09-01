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
        <div className="flex justify-between">
          <button className="text-black">LOGIN</button>
          <input
            type="button"
            value="REGISTER"
            className="text-black "
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
