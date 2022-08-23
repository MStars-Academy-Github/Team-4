import { FaFacebookF } from "react-icons/fa";
export default function Main() {
  return (
    <div className="banner">
      <div className="header w-full h-[70px] flex absolute bg-gradient-to-t from-pink-200 to-pink-500">
        <div className="icons">
          <h3 className="iconTag">Full Match</h3>
          <img className="heartIcon" src="./pictures/heart-icon.png" alt="" />
        </div>
        <div className="navbars flex w-[450px] mt-5 justify-around">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
        <ul>
          <li>
            <a href="#">
              <FaFacebookF className="icons" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="imgs flex">
        <img className="imgMen" src="./pictures/men.png" alt="" />
        <img className="heart" src="./pictures/heart1.png" alt="" />
        <img className="imgWomen" src="./pictures/women1.png" alt="" />
      </div>
    </div>
  );
}
