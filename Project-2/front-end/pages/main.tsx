import React from "react";
import Main from "../components/Main";
import {SetStateAction} from 'react'

export default function main() {
  return (
    <div>
      <Main setChecker={function (value: SetStateAction<boolean | undefined>): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
}
