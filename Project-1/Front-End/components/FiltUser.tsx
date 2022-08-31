import axios from "axios";
import { useEffect, useState } from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
type Props = {
  temp: any;
  getUser: any;
  setComp: any;
  setCheck: any;
};
export default function FiltUser(props: Props) {
  const [temp, setTemp] = useState<any>();
  const [arr, setArr] = useState<any>([]);
  const [users, setUser1] = useState<any>([]);
  useEffect(() => {
    setTemp(props.temp);
    if (localStorage.getItem("result")) {
      setUser1(JSON.parse(localStorage.getItem("result") || "[]"));
    }
  }, []);
  const gender = (e: any) => {
    e.preventDefault();
    const gender = e.target.elements.genderCheck.value;
    const age = e.target.elements.selectAge[0].value;
    const age1 = e.target.elements.selectAge[1].value;

    temp.map((p: any) => {
      if (p?.age >= age && p?.age <= age1 && p?.gender == gender) {
        setArr("[]");
        // debugger;
        arr.push(p);
        // console.log(p);

        setArr(arr);
        props.getUser(arr);
        return p;
      }
    });
  };

  return (
    <div className="card">
      <div className="filterCard">
        <img src="./pictures/heart-icon.png" className="heartIconCard" alt="" />
        <p className="datingMn">dating.mn</p>
        <div className="dot"></div>
        <h3 className="attract">Хэн таныг хамгийн ихээр татаж байна вэ?</h3>
        <div className="formContainer">
          <form action="" onSubmit={gender} className="seekingIcon">
            <div className="genderContainer flex justify-around">
              <div className="gendersIcon flex">
                <p>I am i : </p>
                {users?.data?.gender === "male" ? (
                  <div className="genderIconRound">
                    <BsGenderMale className="text-blue" />
                  </div>
                ) : (
                  <div className="genderIconRound">
                    <BsGenderFemale className="text-red" />
                  </div>
                )}
              </div>
              <div className="genderCont flex">
                <div className="iamI flex">
                  <p className="relative">Seeking a : </p>
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
                <div className="seeking flex">
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
              </div>
            </div>
            <div className="ageContainer justify-around flex">
              <div className="betweenAge flex">
                <label htmlFor="" className=" ">
                  Between Ages :
                </label>
                <select name="selectAge" id="selectAge">
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div className="and flex">
                <label htmlFor="">and</label>
                <select name="selectAge" id="selectAge">
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            <button className="buttonSubmit" type="submit">
              Next
            </button>
            <button
              className="buttonBack"
              type="button"
              onClick={() => {
                props.setComp(true);
                props.setCheck(true);
              }}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
