import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import axios from "axios";
export default function Main() {
  const [hobby, setHobbys] = useState<any>([]);
  const data = ["serious", "pen pal", "romantic", "flirty", "naughty"];
  const [user, setUsers] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);
  const [users, setUser1] = useState<any>([]);
  useEffect(() => {
    if (localStorage.getItem("result")) {
      setUser1(JSON.parse(localStorage.getItem("result") || "[]"));
    }
  }, []);
  console.log(hobby);
  const handle = (e: any) => {
    const a = user
      .filter((u: any) => u.hobby == hobby)
      .map((b: any) => {
        return b;
      });
    console.log(a);
    setUsers(a);
  };

  return (
    <section className="login w-full h-full flex absolute bg-gradient-to-t from-pink-200 to-pink-500">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="header flex justify-between">
        <div className="icons">
          <h3 className="iconTag">Find Your Love</h3>
          <img className="heartIcon" src="./pictures/heart-icon.png" alt="" />
        </div>
        <div className="w-[150px] absolute left-[70%] h-[50px] flex justify-around">
          <p className="userName">{users?.data?.username}</p>
          <MdSystemUpdateAlt
            className="updateIcon"
            target="_blank"
            href="/userupdate"
          />
        </div>

        <div className="contactIconContainer justify-end">
          <ul>
            <li>
              <a href="#">
                <FaFacebookF className="contactIcon" />
              </a>
            </li>
            <li>
              <a href="">
                <GrTwitter className="contactIcon" />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram className="contactIcon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaPhoneSquareAlt className="contactIcon" />
              </a>
            </li>
            <li>
              <a href="">
                <FiMail className="contactIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="mainContainer">
        <div className="card">
          <div className="cardInside">
            <img
              src="./pictures/heart-icon.png"
              className="heartIconCard"
              alt=""
            />
            <p className="datingMn">dating.mn</p>
            <div className="dot"></div>
            <h2>Өөрийнхөө жинхэнэ хайрийг эндээс олоорой!</h2>
            <p className="findP">
              Таньтай хамгийн зохицож чадах хүнийг та хайж олоорой!
            </p>
            <h3>Та ямар хүнтэй танилцмаар байна вэ?</h3>
            <div className="hobbyCheckBox">
              {data.map((e, i) => {
                return (
                  <div key={i}>
                    <button
                      type="button"
                      name="interest"
                      id="interest"
                      value={e}
                      onClick={() => {
                        setHobbys([...hobby, e]);
                      }}
                    >
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
            <button type="button" className="buttonNext" onClick={handle}>
              Next
            </button>
          </div>
        </div>
        <div className="allUsers">
          {user?.map((e: any) => {
            return (
              <div className="usersCard">
                <img src={e.imgUrl} className="userImg" alt="" />
                <p className=" text-center relative top-[-25px]">
                  {e.firstName}
                </p>
                <div className="information flex">
                  <div className="flex flex-row">
                    <p className="age relative top-[-20px] left-[60px]">
                      {e.age}
                    </p>
                    <p className="ageText relative top-[5px] left-[30px]">
                      Age
                    </p>
                  </div>
                  <div className="hobby flex flex-col">
                    <p className="age relative top-[-22px] left-[80px]">
                      {e.hobby}
                    </p>
                    <p className="ageText relative top-[-25px] left-[80px]">
                      Interest
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
