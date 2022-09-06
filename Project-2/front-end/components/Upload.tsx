import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";

export default function Upload() {
  const [user, setUser] = useState<IUser>();
  const [values, setValues] = useState({
    title: "",
    video: "",
    description: "",
    genre: "",
    redirect: false,
    error: "",
    mediaId: "",
  });
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user") || "");

    setUser(res);
  }, []);

  const genre = ["Animation", "Music", "Gaming", "Entertainment", "Comedy"];
  const handleChange = (name: any) => (event: any) => {
    const value = name === "video" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
  };
  async function submithandler(e: any) {
    console.log(values);

    e.preventDefault();
    const formData = new FormData();
    if (user) {
      console.log(values);

      formData.append("media", values.video as any);
      formData.append("title", e.target.title.value);
      formData.append("genre", e.target.genre.value);
      formData.append("description", e.target.description.value);
      formData.append("postedBy", user?._id);

      axios({
        method: "post",
        url: "http://localhost:4000/v1/media/upload",
        data: formData,

        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          console.log(formData);
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <div>
      <img
        src="./pictures/Chitube.png"
        className="w-[250px] h-[200px] m-auto"
        alt=""
      />
      <div className=" bg-red-500 w-[570px] h-[570px] rounded-full flex justify-center items-center mx-auto">
        <div className="bg-red-500 w-[560px] h-[560px] rounded-full flex items-center flex-col border-4 border-white">
          <form
            action="submit"
            className="flex justify-around w-[350px] h-[400px] mt-5 items-center flex-col"
            onSubmit={(e: any) => {
              submithandler(e);
            }}
            encType="multipart/form-data"
          >
            <p className=" text-[#fff]">ADD YOUR VIDEO</p>

            <input
              className="rounded-md"
              type="text"
              name="title"
              id="title"
              placeholder="title"
            />

            <select className="rounded-md" name="genre" id="genre">
              <option value="none" selected disabled hidden>
                Select a genre
              </option>
              {genre.map((e) => {
                return <option value={e}>{e}</option>;
              })}
            </select>
            <input
              className="rounded-md"
              type="text"
              name="description"
              id="description"
              placeholder="description"
            />
            <input
              accept="video/*"
              type="file"
              onChange={handleChange("video")}
              id="icon-button-file"
            />
            <button className=" rounded-md bg-[#fff] w-[150px] text-red-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
