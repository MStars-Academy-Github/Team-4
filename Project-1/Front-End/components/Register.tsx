import axios from "axios";
import { useState } from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
type Props = {
  setChecker: any;
};
export default function register(props: Props) {
  const [change, setChange] = useState<any>([]);

  const data = ["serious", "pen pal", "romantic", "flirty", "nothing"];

  function doubleChecker(e: string) {
    if (change.includes(e)) {
      change.splice(change.indexOf(e), 1);
      setChange(change);
    } else {
      setChange([...change, e]);
    }
  }

  const Name = (e: any) => {
    e.preventDefault();

    const username = e.target[0].value;
    const firstName = e.target[0 + 1].value;
    const lastName = e.target[1 + 1].value;
    const age = e.target[4 + 1].value;
    const gender = e.target[2 + 1].value == "on" ? "male" : "female";
    const hobby = change.toString();
    const imgUrl = e.target[5 + 1].value;
    const password = e.target[6 + 1].value;

    axios
      .post("http://localhost:3001/users", {
        username: username,
        firstName: firstName,
        lastName: lastName,
        imgUrl: imgUrl,
        age: age,
        gender: gender,
        hobby: hobby,
        password: password,
      })
      .then((res) => console.log(res.status))
      .catch((error) => console.error(error));
  };
  return (
    <section className="login w-full h-full flex absolute bg-gradient-to-t from-pink-200 to-pink-500">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box relative">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container relative w-[400px] min-h-[400px]">
          <div className="loginForm relative w-full h-full p-[40px]">
            <h2>Register Form</h2>
            <form action="" onSubmit={Name}>
              <div className="inputBoxRegister">
                <input type="text" placeholder="username" name="username" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="first name" name="firstname" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="last name" name="lastname" />
              </div>
              <div className="inputCheckBoxRegister">
                <div className="checkboxGender ml-2 mt-4 flex justify-start">
                  <p>I am a:</p>
                  <label className="mr-1" htmlFor="male">
                    <BsGenderMale />
                  </label>
                  <input type="radio" name="gender" id="male" />
                  <label className="ml-[10px]" htmlFor="female">
                    <BsGenderFemale />
                  </label>
                  <input type="radio" name="gender" id="female" />
                </div>
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="age" name="gender" />
              </div>
              <div className="inputSelectRegister"></div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="image url" name="imgurl" />
              </div>
              <div className="inputBoxRegister">
                <input type="password" placeholder="Password" name="password" />
              </div>
              <p className="interestText mt-2 ml-2">Interest</p>
              <div className="inputCheckbox">
                {data.map((e, i) => {
                  return (
                    <div key={i}>
                      {/* <input
                        // className="w-[100px] bg-black text-slate-300"
                        
                      />

                      <label htmlFor="interest"></label> */}
                      <button
                        type="button"
                        className={change.includes(e) ? "checked" : ""}
                        name="interest"
                        id="interest"
                        onClick={() => {
                          // console.log("working");

                          doubleChecker(e);
                        }}
                      >
                        {e}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="inputBox">
                <button
                  type="submit"
                  onClick={() => {
                    props.setChecker(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
