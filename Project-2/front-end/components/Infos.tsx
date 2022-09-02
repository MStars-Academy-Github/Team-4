import axios from "axios";
import React from "react";
import { InfoProps, IUser } from "../types/types";

export default function Infos({ user }: InfoProps) {
  /**
   * END HEREGLEGCH MEDEELLEE SHINECHILNEE. FORM IIN STYLE IIG NI UURCHLUNU
   */
  console.log(user);
  async function submitHandler(e: any) {
    console.log(e);
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      phone: e.target[0].value,
      register: e.target[0].value,
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
        <input type="text" placeholder={user?.firstName} />
        <input type="text" placeholder={user?.lastName} />
        <input type="number" placeholder={user?.phone.toString()} />
        <input type="text" placeholder={user?.register} />
        <button>UPDATE</button>
      </form>
    </div>
  );
}
