import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
export default function Main() {
  const [hobby, setHobbys] = useState<any>([]);
  const data = ["serious", "pen pal", "romantic", "flirty", "naughty"];
  console.log(hobby);

  return (
    <section className="login w-full h-full flex absolute bg-gradient-to-t from-pink-200 to-pink-500">
      <pre>{hobby}</pre>
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
      <section>
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
            <button type="submit" className="buttonNext">
              Next
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
