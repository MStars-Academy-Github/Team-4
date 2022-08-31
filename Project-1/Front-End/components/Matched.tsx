import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function Matched() {
  const [result, setResult] = useState<any>();
  const [data, setData] = useState<any>();
  const [check, setCheck] = useState<boolean>(false);
  const router = useRouter();
  // const username =
  useEffect(() => {
    const res = localStorage.getItem("result");
    if (res !== undefined) {
      setResult(JSON.parse(res || ""));
      axios
        .post("http://localhost:3001/users/match", {
          username: result?.data?.username,
          firstName: result?.data?.firstName,
        })
        .then((res) => {
          setData(res.data);
          setCheck(true);
        })
        .catch((error) => console.error(error));
    }
    // console.log(result?.data?.username, result?.data?.firstName);

    // length = data?.data;
    console.log(data?.data?.length);
  }, [check]);
  return (
    <div className="login w-full h-full  absolute bg-gradient-to-t from-pink-200 to-pink-500">
      {" "}
      {/* <Header users={undefined} /> */}
      {data?.data == "undefined" ? (
        "loading"
      ) : (
        <div className="flex justify-center mx-auto ">
          {data?.data?.length == 0
            ? "sorry you don't have any matched people"
            : data?.data.map((e: any) => {
                return (
                  <div className="flex">
                    <img src={e.imgUrl} alt="" className="w-[250px]" />
                    <div>
                      {e.firstName} {e.lastName}
                    </div>
                  </div>
                );
              })}
        </div>
      )}
      <button
        type="button"
        onClick={() => {
          router.push("/main");
        }}
      >
        Back
      </button>
    </div>
  );
}
