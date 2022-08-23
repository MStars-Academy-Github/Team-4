export default function login() {
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
            <form action="">
              <div className="inputBox">
                <input type="text" placeholder="Username" />
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Password" />
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
