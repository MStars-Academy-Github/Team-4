import React, { useEffect, useState } from "react";
import Header from "./Header";
import { SetStateAction } from "react";
import { IUser, IVideos } from "../types/types";
import Infos from "./Infos";
import ChangePass from "./ChangePass";
import axios from "axios";
import Player from "./Player";
export default function Profile() {
  const [user, setUser] = useState<IUser>();
  const [comps, setComps] = useState<number>(0);
  const [result, setResult] = useState<IVideos[] | []>([]);
  const [res, setRes] = useState<boolean>();
  useEffect(() => {
    if (localStorage) {
      setUser(JSON.parse(localStorage.getItem("user") || ""));
      console.log(user?._id);

      axios
        .get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/video/by/${user?._id}`
        )
        .then((res) => {
          console.log(res.data.data);
          setResult(res.data.data);
          setRes(true);
        });
    }
  }, [comps]);
  function clickHandler(e: IVideos) {
    console.log(e);
  }
  return (
    <div>
      <Header
        setChecker={function (value: SetStateAction<boolean | undefined>) {}}
      />
      <div className="flex justify-around">
        <div className=" bg-red-500 w-[20%] items-center flex-col mt-10 ml-5 h-[300px] border rounded">
          <h3 className="pl-5 pt-5 text-[#fff]">Username: {user?.firstName}</h3>
          <div className="pl-8 justify-start items-start mt-2 mb-2 flex-col flex">
            <button
              className="text-[#fff]"
              type="button"
              onClick={() => {
                setComps(0);
                // console.log("working");
              }}
            >
              CHANGE INFO
            </button>
            <button
              className="text-[#fff]"
              type="button"
              onClick={() => {
                setComps(1);
                // console.log("working");
              }}
            >
              CHANGE YOUR EMAIL OR PASSWORD
            </button>
            <button
              className="text-[#fff]"
              type="button"
              onClick={() => {
                setComps(2);
                // console.log("working");
              }}
            >
              YOUR VIDEOS
            </button>
            <button
              className="text-[#fff]"
              type="button"
              onClick={() => {
                setComps(3);
                // console.log("working");
              }}
            >
              YOUR LIKED VIDEOS
            </button>
          </div>
          <button type="button" className="pl-5  text-red-500">
            DELETE ACCOUNT
          </button>
        </div>
        <div className="w-[20%] mt-10 bg-black text-red-500 rounded p-5">
          {comps == 0 ? (
            <Infos user={user} />
          ) : comps == 1 ? (
            <ChangePass user={user} />
          ) : comps == 2 ? (
            <div>
              {result?.map((e: IVideos, i: number) => {
                return (
                  <div className="flex justify-between">
                    <input
                      type="button"
                      value={e.title}
                      onClick={() => {
                        clickHandler(e);
                      }}
                    />
                    {/* {e.title} */}
                    <div className="flex justify-between">
                      <button type="button">edit</button>
                      <button type="button">delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            "lorem3"
          )}
        </div>
      </div>
    </div>
  );
}
