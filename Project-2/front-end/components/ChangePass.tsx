import React, { useState } from "react";
import { InfoProps } from "../types/types";
import axios from "axios";
export default function ChangePass({ user }: InfoProps) {
  const [number, setNumber] = useState<number>(0);
  async function submitHandler(e: any) {
    e.preventDefault();
    console.log(e.target[0].value);

    if (number == 0) {
      /** email update hiideg end-point garga */
    } else {
      const data = { email: user?.email, password: e.target[0].value };
      axios
        .post("http://localhost:4000/v1/auth/login", { data })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            /**password uurchildug endpoint hii */
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  return (
    <div className="flex">
      <div className="flex flex-col">
        CHANGE :
        <button
          type="button"
          onClick={() => {
            setNumber(0);
          }}
        >
          email
        </button>{" "}
        <button
          type="button"
          onClick={() => {
            setNumber(1);
          }}
        >
          password
        </button>
      </div>
      <div className="ml-40 w-[220px] p-5 bg-black ">
        <form
          action="submit "
          onSubmit={(e: any) => {
            submitHandler(e);
          }}
        >
          {number == 0 ? (
            <div className="text-white">
              <p>{user?.email}</p>
              <input type="text" name="" id="" placeholder="New Email" />
            </div>
          ) : (
            <div>
              <input type="password" placeholder="Old password" />
              <input type="password" placeholder="New password" />
            </div>
          )}
          <button className="text-white">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
