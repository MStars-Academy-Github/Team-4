import axios from "axios";
import React from "react";
import { InfoProps, IUser } from "../types/types";

export default function Infos({ user }: InfoProps) {
  /**
   * END HEREGLEGCH MEDEELLEE SHINECHILNEE. FORM IIN STYLE IIG NI UURCHLUNU
   */
  console.log(user);
  async function submitHandler(e: any) {
    e.preventDefault();
    console.log(e);
    const data = {
      firstname: e.target[0].value || user?.firstname,
      lastname: e.target[1].value || user?.lastname,
      phone: e.target[2].value || user?.phone,
      register: e.target[3].value || user?.register,
    };
    axios
      .put("http://localhost:4000/v1/user/update", { data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <form
        action="submit"
        className="flex-col w-full flex"
        onSubmit={(e: any) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder={user?.firstname} />
        <input type="text" placeholder={user?.lastname} />
        <input type="number" placeholder={user?.phone.toString()} />
        <input type="text" placeholder={user?.register} />
        <button>UPDATE</button>
      </form>
    </div>
  );
}
