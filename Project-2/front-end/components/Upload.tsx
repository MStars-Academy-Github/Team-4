import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";

export default function Upload() {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user") || "");

    setUser(res);
  }, []);

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
    <div className="bg-gray-400 w-[40%] flex justify-center mx-auto">
      <form
        action="submit"
        className="flex flex-col"
        onSubmit={(e: any) => {
          submithandler(e);
        }}
        encType="multipart/form-data"
      >
        <p>ADD YOUR VIDEO</p>
        <input type="file" name="media" id="media" />
        <input type="text" name="title" id="title" placeholder="title" />
        <input type="text" name="genre" id="genre" placeholder="genre" />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
        />
        <button>submit</button>
      </form>
    </div>
  );
}
