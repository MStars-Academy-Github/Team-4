import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [result, setResult] = useState();

  const router = useRouter();
  const login = (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    axios
      .post("http://localhost:3001/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (result !== undefined) {
      localStorage.setItem("result", JSON.stringify(result));
    }
  }, [result]);
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
            <h2>Login Form</h2>
            <form onSubmit={login}>
              <div className="inputBox">
                <input type="text" placeholder="Username" name="username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" name="password" />
              </div>
              <p className="result text-[#fff]">aaa</p>
              <a className="registerButton" href="/register">
                Бүртгүүлэх
              </a>

              <div className="inputBox">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
