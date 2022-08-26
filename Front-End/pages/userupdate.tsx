import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";

export default function userupdate() {
  const [users, setUser1] = useState<any>([]);
  useEffect(() => {
    if (localStorage.getItem("result")) {
      setUser1(JSON.parse(localStorage.getItem("result") || "[]"));
    }
  }, []);
  const update = (e: any) => {
    e.preventDefault();
    const _id = users?.data?._id;
    const username = e.target[0].value;
    const hobby = e.target[1].value;
    const imgUrl = e.target[2].value;
    axios
      .put("http://localhost:3001/users/update", {
        fixedname: username,
        hobby: hobby,
        imgUrl: imgUrl,
        _id: _id,
      })
      .then((res) => console.log(res));
  };
  console.log(users?.data?._id);

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
      <div className="card1 absolute ">
        <h2>Update your information</h2>
        <form action="" onSubmit={update} className="userUpdate flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            className="inputUsername"
            type="text"
            name="username"
            placeholder={users?.data?.username}
          />
          <label htmlFor="selectInterest" className="selectInterest">
            Interest
          </label>
          <select name="selectInterest" id="interest">
            <option value="naughty">Naughty</option>
            <option value="romantic">Romantic</option>
            <option value="seriuos">Seriuos</option>
            <option value="pen pal">Pen pal</option>
            <option value="flirt">Flirty</option>
          </select>
          <label className="imgUrl" htmlFor="imgUrl">
            Img Url
          </label>
          <input
            className="imgUrlInput"
            type="text"
            name="imgUrl"
            placeholder={users?.data?.imgUrl}
          />
          <button type="submit" className="updateButton">
            Update
          </button>
        </form>
      </div>
    </section>
  );
}
