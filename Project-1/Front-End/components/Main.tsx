import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { MdSystemUpdateAlt } from "react-icons/md";
import AllUser from "../components/AllUser";
import { useRouter } from "next/router";
import FiltUser from "./FiltUser";
import Header from "./Header";
// import Modal from "./Modal";
export default function Main() {
  const [comp, setComp] = useState<boolean>(true);
  const [hobby, setHobbys] = useState<string>("");
  const data = ["serious", "pen pal", "romantic", "flirty", "naughty"];
  const [user, setUser] = useState<any>();
  const [check, setCheck] = useState<boolean>(true);
  const [temp, setTemp] = useState<any>();
  const [one, setOne] = useState<any>();
  const router = useRouter();
  const getUser = (e: any) => {
    setTemp(e);
  };
  useEffect(() => {
    fetch("http://13.229.125.230:3001/users")
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
  function open(e: any) {
    setOne(e);
  }
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
      <Header users={users} />

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
          <FiltUser
            temp={temp}
            getUser={getUser}
            setComp={setComp}
            setCheck={setCheck}
          />
        )}
        <div className="allUsers">
          {(check ? user : temp)?.map((e: any) => {
            return e && <AllUser e={e} />;
          })}
        </div>
      </section>
    </section>
  );
}
