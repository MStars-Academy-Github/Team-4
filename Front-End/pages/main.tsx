import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
export default function Main() {
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
    </section>
  );
}
