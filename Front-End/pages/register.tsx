import axios from "axios";

export default function register() {
  const Name = (e: any) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const age = e.target[2].value;
    const gender = e.target[3].value;
    const hobby = e.target[4].value;
    const imgUrl = e.target[5].value;
    const password = e.target[6].value;
    axios
      .post("http://localhost:3001/users", {
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
                <input type="text" placeholder="first name" name="firstname" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="last name" name="lastname" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="age" name="age" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="gender" name="gender" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="interest" name="interest" />
              </div>
              <div className="inputBoxRegister">
                <input type="text" placeholder="image url" name="imgurl" />
              </div>
              <div className="inputBoxRegister">
                <input type="password" placeholder="Password" name="password" />
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
