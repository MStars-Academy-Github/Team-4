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
    console.log(name);

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
      // formData.append("postedBy" )
      console.log(values.video);

      console.log(e.target[0].value.slice(12));

      // axios({
      //   method: "post",
      //   url: "http://localhost:4000/v1/media/upload",
      //   data: formData,

      //   headers: { "Content-Type": "multipart/form-data" },
      // })
      //   .then((res) => {
      //     console.log(formData);
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    }
  }
  return (


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
