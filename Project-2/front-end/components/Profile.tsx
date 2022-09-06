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
  const [checker, setChecker] = useState<boolean>(false);
  const [edit, setEdit] = useState<IVideos>();

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
  function editHandler(e: any) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    axios
      .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/edit`, {
        _id: edit?._id,
        title: title,
        description: description,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(title, description);
  }
  function deleteHandler(e: any) {
    axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/media/delete/${e._id}`)
      .then((res) => {
        console.log(res);
      });
  }

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
                // console.log("working");
              }}
            >
              CHANGE INFO
            </button>
            <button
              type="button"
              onClick={() => {
                setComps(1);
                // console.log("working");
              }}
            >
              CHANGE YOUR EMAIL OR PASSWORD
            </button>
            <button
              type="button"
              onClick={() => {
                setComps(2);
                // console.log("working");
              }}
            >
              YOUR VIDEOS
            </button>
            <button
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
        <div className="w-[50%] mt-10 bg-slate-200 text-black rounded p-5">
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
                      onClick={() => {}}
                      disabled
                    />
                    {/* {e.title} */}
                    <div className="flex justify-between w-24">
                      <button
                        type="button"
                        onClick={() => {
                          console.log(checker);
                          setEdit(e);
                          setChecker(true);
                        }}
                      >
                        edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          deleteHandler(e);
                        }}
                      >
                        delete
                      </button>
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
      {checker ? (
        <form
          action="submit"
          className="flex flex-col mx-10 mt-5 border border-black rounded p-4"
          onSubmit={(e: any) => {
            editHandler(e);
          }}
        >
          <h5>EDIT </h5>
          <hr />
          <p>Title</p>
          <input
            type="text"
            placeholder={edit?.title}
            id="title"
            name="title"
            className="bg-black text-white"
          />
          <p className="mt-5">Description</p>
          <hr />
          <input
            type="text"
            placeholder={edit?.description.slice(0)}
            id="description"
            name="description"
          />
          <button>SUBMIT</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
