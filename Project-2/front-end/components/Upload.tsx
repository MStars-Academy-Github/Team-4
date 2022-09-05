import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";

export default function Upload() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user") || "");

    setUser(res);
  }, []);

  const genre = ["Animation", "Music", "Gaming", "Entertainment", "Comedy"];
  async function submithandler(e: any) {
    e.preventDefault();
    const formData = new FormData();
    if (user) {
      formData.append("media", e.target.media.value);
      formData.append("title", e.target.title.value);
      formData.append("genre", e.target.genre.value);
      formData.append("description", e.target.description.value);
      formData.append("postedBy", user?._id);
      // formData.append("postedBy" )
      console.log(formData);

      axios({
        method: "post",
        url: "http://localhost:4000/v1/media/upload",
        data: formData,

        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <div className="upload w-[350px] min-h-[800px] justify-center items-center flex flex-col mx-auto">
      <div className="uploads">
        <form
          action="submit"
          className="flex flex-col justify-around"
          onSubmit={(e: any) => {
            submithandler(e);
          }}
          encType="multipart/form-data"
        >
          <img src="./pictures/Chitube.png" alt="" />
          <p>ADD YOUR VIDEO</p>

          <input type="text" name="title" id="title" placeholder="Title" />

          <select name="genre" id="genre">
            <option value="none" selected disabled hidden>
              Select a genre
            </option>
            {genre.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
          />
          <input type="file" name="media" id="media" />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
