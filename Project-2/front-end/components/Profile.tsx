import React, { useEffect, useState } from "react";
import Header from "./Header";
import { SetStateAction } from "react";
import { IUser } from "../types/types";
import Infos from "./Infos";
import ChangePass from "./ChangePass";
export default function Profile() {
  const [user, setUser] = useState<IUser>();
  const [comps, setComps] = useState<number>(0);
  useEffect(() => {
    if (localStorage) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    }
  }, []);

  return (
    <div>
      <Header
        setChecker={function (value: SetStateAction<boolean | undefined>) {}}
      />
      <div className="flex justify-around">
        <div className="bg-gray-400 w-[40%] items-center flex-col mt-10 ml-5 h-[300px] border rounded">
          <h3 className="pl-5 pt-5">USERNAME</h3>
          <div className="pl-8 justify-start items-start  bg-slate-400 mt-2 mb-2 flex-col flex">
            <button
              type="button"
              onClick={() => {
                setComps(0);
                console.log("working");
              }}
            >
              CHANGE INFO
            </button>
            <button
              type="button"
              onClick={() => {
                setComps(1);
                console.log("working");
              }}
            >
              CHANGE YOUR EMAIL OR PASSWORD
            </button>
            <button
              type="button"
              onClick={() => {
                setComps(2);
                console.log("working");
              }}
            >
              YOUR VIDEOS
            </button>
            <button
              type="button"
              onClick={() => {
                setComps(3);
                console.log("working");
              }}
            >
              YOUR LIKED VIDEOS
            </button>
          </div>
          <button type="button" className="pl-5  text-red-500">
            DELETE ACCOUNT
          </button>
        </div>
        <div className="w-[50%] mt-10 bg-slate-200 text-black rounded p-5">
          {comps == 0 ? (
            <Infos user={user} />
          ) : comps == 1 ? (
            <ChangePass user={user} />
          ) : comps == 2 ? (
            "lorem2"
          ) : (
            "lorem3"
          )}
        </div>
      </div>
    </div>
  );
}