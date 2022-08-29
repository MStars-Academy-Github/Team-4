import axios from "axios";
import { useState } from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

export default function register() {
<<<<<<< HEAD
  const [change, setChange] = useState<string[]>([]);
  const [classType, setClassType] = useState<boolean>();

  const [check, setCheck] = useState<boolean>(true);
  const data = ["serious", "pen pal", "romantic", "flirty", "nothing"];
  console.log(change);
  let counting = 0;
  function doubleChecker(e: string) {
    setCheck(false);
    // setClassType(!classType);
    const value = change.includes(e);
    console.log(value);
=======
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
>>>>>>> eebee103bbdcb4a52c58ffabaa3fa2113ca1410a

    if (value) {
      const index = change.indexOf(e);
      change.splice(index, 1);
      setChange(change);
      console.log(change);
      // setClassType("");
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
<<<<<<< HEAD
    const data = [
      username,
      firstName,
      lastName,
      age,
      gender,
      hobby,
      imgUrl,
      password,
    ];
    console.log(data);
=======
>>>>>>> eebee103bbdcb4a52c58ffabaa3fa2113ca1410a

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
<<<<<<< HEAD
                      <button
                        className={
                          change.includes(e) ? "checked " : "text-[#7c7878] "
                        }
                        type="button"
                        name={e}
                        id="interest"
                        onClick={async () => {
=======
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

>>>>>>> eebee103bbdcb4a52c58ffabaa3fa2113ca1410a
                          doubleChecker(e);
                        }}
                      >
                        {e}
                      </button>
                    </div>
                  );
                })}
                <input
                  type="button"
                  value="clear"
                  className="text-red-600 ml-5 mt-3 mb-auto border border-red-600 rounded-lg h-10 flex w-20 justify-center "
                  onClick={() => {
                    setChange([]);
                  }}
                />
              </div>
              <div className="inputBox">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
