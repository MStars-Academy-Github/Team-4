import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import AllUser from "../components/AllUser";
import { useRouter } from "next/router";
import FiltUser from "./FiltUser";
export default function Main() {
  const [comp, setComp] = useState<boolean>(true);
  const [hobby, setHobbys] = useState<string>("");
  const data = ["serious", "pen pal", "romantic", "flirty", "naughty"];
  const [user, setUser] = useState<any>();
  const [check, setCheck] = useState<boolean>(true);
  const [temp, setTemp] = useState<any>();
  const router = useRouter();
  const getUser = (e: any) => {
    setTemp(e);
  };
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => setUser(res.data));
  }, []);
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    const res = localStorage.getItem("result");
    console.log(res);
    if (res !== undefined) {
      //   setCheck(true);
      setUsers(JSON.parse(localStorage.getItem("result") || "[]"));
      //   console.log("this will owrk");
    } else {
      //   console.log("this wont work");
    }
  }, []);
  // console.log(hobby);
  const handle = (e: any) => {
    setCheck(false);
    setComp(false);
    const filtering = user?.map((b: any) => {
      if (b.hobby == hobby) {
        return b;
      } else {
        console.log("there is no such thing");
      }
    });
    setTemp(filtering);

    // setUser(a);
    console.log(filtering);
  };
  const tabIndex = -1;
  return (
    <section className="login w-full h-full flex absolute bg-gradient-to-t from-pink-200 to-pink-500">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
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
              <p className="userName">{users?.data?.username}</p>
              <MdSystemUpdateAlt
                className="updateIcon"
                target="_blank"
                href="/userupdate"
              />
            </button>
            <div className="dropdown-content text-black  w-[100px] origin-top-right absolute right-0   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* <input type="button" value="Change" placeholder="Change" />
              <input type="button" value="Log out" placeholder="Log out" /> */}
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

      <section className="mainContainer">
        {comp ? (
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
                        className={e == hobby ? "checked" : ""}
                        type="button"
                        name="interest"
                        id="interest"
                        value={e}
                        onClick={() => {
                          setHobbys(e);
                        }}
                      >
                        {e}
                      </button>
                    </div>
                  );
                })}
                <button
                  className={hobby == "show all" ? "checked" : ""}
                  onClick={() => {
                    setCheck(true), setHobbys("show all");
                  }}
                >
                  show all
                </button>
              </div>
              <button type="button" className="buttonNext" onClick={handle}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <FiltUser temp={temp} getUser={getUser} />
        )}
        <div className="allUsers">
          {(check ? user : temp)?.map((e: any) => {
            return e && <div></div>;
          })}
        </div>
        <AllUser />
      </section>
    </section>
  );
}
