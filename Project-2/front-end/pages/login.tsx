import React from "react";
import Login from "../components/Login";
import { SetStateAction } from "react";

export default function login() {
  return (
    <div>
      <Login
        setChecker={function (
          value: SetStateAction<boolean | undefined>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
