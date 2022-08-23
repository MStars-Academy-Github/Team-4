import axios from "axios";

export default function login() {
  const login = (e: any) => {
    e.preventDefault();
    const firstName = e.target[0].value;

    const password = e.target[1].value;

    axios
      .post("http://localhost:3001/users/login", {
        firstName: firstName,

        password: password,
      })
      .then((res) => console.log(res))
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
            <h2>Login Form</h2>
            <form onSubmit={login}>
              <div className="inputBox">
                <input type="text" placeholder="Username" name="username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" name="password" />
              </div>
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
