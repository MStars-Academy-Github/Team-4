import axios from "axios";
import { useEffect, useState } from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

export default function FiltUser() {
  const [users, setUser1] = useState<any>([]);
  useEffect(() => {
    if (localStorage.getItem("result")) {
      setUser1(JSON.parse(localStorage.getItem("result") || "[]"));
    }
  }, []);
  const gender = (e: any) => {
    e.preventDefault();
    const gender = e.target.elements.genderCheck.value;
    console.log(gender);
  };
  return (
    <div className="card">
      <div className="filterCard">
        <img src="./pictures/heart-icon.png" className="heartIconCard" alt="" />
        <p className="datingMn">dating.mn</p>
        <div className="dot"></div>
        <h3 className="attract">Хэн таныг хамгийн ихээр татаж байна вэ?</h3>
        <div className="genderContainer flex justify-between">
          <div className="gendersIcon flex">
            <p>I am i : </p>
            {users?.data?.gender === "male" ? (
              <div className="genderIconRound">
                <BsGenderMale />
              </div>
            ) : (
              <div className="genderIconRound">
                <BsGenderFemale />
              </div>
            )}
          </div>
          <div className="seeking flex">
            <p>Seeking a : </p>
            <div>
              <form action="" onSubmit={gender} className="seekingIcon flex">
                <div className="flex">
                  <label htmlFor="checkboxMale">
                    <BsGenderMale className="iconMale" />
                  </label>
                  <input
                    type="radio"
                    value="male"
                    name="genderCheck"
                    id="checkboxMale"
                  />
                </div>
                <div className="flex">
                  <label htmlFor="checkboxFemale">
                    <BsGenderFemale className="iconFemale" />
                  </label>
                  <input
                    type="radio"
                    value="female"
                    name="genderCheck"
                    id="checkboxFemale"
                  />
                </div>
                <button className="buttonSubmit absolute" type="submit">
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
