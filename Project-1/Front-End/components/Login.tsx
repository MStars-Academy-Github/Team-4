import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Register from "./Register";
type Result = {
  data: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    imgUrl: string;
    password: string;
    gender: string;
    age: number;
    __v: number;
  };
  message: string;
  success: boolean;
};
type Prop = {
  checker: any;
};
export default function Login() {
  const [result, setResult] = useState<Result>();
  const [check, setChecker] = useState<boolean>();

  const router = useRouter();
  // console.log(result);

  const login = (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    // console.log(username, password);
    // debugger;
    axios
      .post("http://13.229.125.230:3001/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        // console.log(res);
        // console.log(res);
        // debugger;
        // debugger
        setResult(res.data);
        // debugger;
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    console.log(result);

    if (result !== undefined && result.success) {
      localStorage.setItem("result", JSON.stringify(result));

      // console.log("testing");
      // props.checker(true);
      router.push("/main");
    }
  }, [result]);
  // console.log(result);

  return check ? (
    <Register setChecker={setChecker} />
  ) : (
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
            <h2>Login Form</h2>
            <form onSubmit={login}>
              <div className="inputBox">
                <input type="text" placeholder="Username" name="username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" name="password" />
              </div>
              <p className="result text-[#fff]">{result?.message}</p>
              <a
                className="registerButton"
                onClick={() => {
                  setChecker(true);
                }}
              >
                Бүртгүүлэх
              </a>
              <div className="inputBox">
                <button
                  type="submit"
                  // onClick={() => {
                  //   props.checker(true);
                  // }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
