import React from "react";
import { MainProps } from "../types/types";
import Header from "./Header";

export default function Main({ setChecker }: MainProps) {
  return (
    <div className="w-[100vw] h-[100vh] flex-col bg-gray-400 m-0 p-0">
      <Header setChecker={setChecker} />
    </div>
  );
}
