export default function register() {
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
            <form action="">
              <div className="inputBoxRegister">
                <input type="text" placeholder="first name" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="last name" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="age" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="gender" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="interest" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="image url" />
              </div>
              <div className="inputBoxRegister">
                <input type="password" placeholder="Password" />
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
