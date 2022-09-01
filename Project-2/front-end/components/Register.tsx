import React from "react";
import { RegisterProps } from "../types/types";
import axios from "axios";
export default function Register({ setComp }: RegisterProps) {
  async function submitHandler(e: any) {
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      register: e.target[4].value,
      password: e.target[5].value,
    };
    axios
      .post("http://localhost:4000/v1/users", {
        data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className=" bg-white w-[300px] text-black">
      <form
        action="submit"
        onSubmit={(e: any) => {
          submitHandler(e);
        }}
      >
        <div className=" flex-col flex bg-white w-[300px] p-4 text-white">
          <input
            className="mb-2 p-3"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
          <input
            className="mb-2 p-3"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
          <input
            className="mb-2 p-3"
            type="text"
            name="email"
            id="username"
            placeholder="Email"
          />
          <input
            className="mb-2 p-3"
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <input
            className="mb-2 p-3"
            type="text"
            name="registerID"
            id="registerID"
            placeholder="Register ID"
          />
          <input
            className="mb-2 p-3"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            value="back"
            className="w-[50px]"
            onClick={() => {
              setComp(true);
            }}
          />
          <button className="flex mx-auto mb-2">REGISTER</button>
        </div>
      </form>
    </div>
  );
}
