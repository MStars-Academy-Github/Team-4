import React from "react";
import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import AllUser from "../components/AllUser";
import { useRouter } from "next/router";
import FiltUser from "./FiltUser";
type Props = {
  users: any;
};

export default function Header(props: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="header flex justify-between">
        <div className="icons ">
          <h3 className="iconTag">Find Your Love</h3>
          <img className="heartIcon" src="./pictures/heart-icon.png" alt="" />
        </div>

        <div className="  pl-[45%] h-[50px] flex justify-around">
          <div className="dropdown">
            <button
              className="border-none bg-none flex w-[100px] dropbtn"
              id="account"
              aria-expanded="true"
              aria-haspopup="true"
              type="button"
            >
              <p className="userName">{props.users?.data?.username}</p>
              <MdSystemUpdateAlt
                className="updateIcon"
                target="_blank"
                href="/userupdate"
              />
            </button>
            <div className="dropdown-content text-black  w-[250px] h-[250px] origin-top-right absolute right-0   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* <input type="button" value="Change" placeholder="Change" />
          <input type="button" value="Log out" placeholder="Log out" /> */}
              {/* <p
                className="py-2 px-1 text-black"
                onClick={() => {
                  router.push("/matched");
                }}
              >
                Matched users
              </p> */}
              <p
                className="py-2 px-1 text-black"
                onClick={() => {
                  router.push("/userupdate");
                }}
              >
                Change information
              </p>

              <p
                className="py-2 px-1 text-black"
                onClick={() => {
                  localStorage.clear();
                  router.push("/login");
                }}
              >
                Log Out
              </p>
            </div>
          </div>
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
    </div>
  );
}
