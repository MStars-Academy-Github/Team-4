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
    console.log(e.target.title.value);
  }
  return (
    <div className="bg-gray-400 w-[40%] flex justify-center mx-auto">
      <form
        action="submit"
        className="flex flex-col"
        onSubmit={(e: any) => {
          submithandler(e);
        }}
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
