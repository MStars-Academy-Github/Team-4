import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import axios from "axios";
// import Modal from "react-bootstrap/Modal";
type Props = {
  e: any;
};
export default function modal({ e }: Props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [result, setResult] = useState<any>();
  function dislike(e: any) {
    console.log(e);
  }
  function like(e: any) {
    console.log(e);
    const res = localStorage.getItem("result");
    if (res !== undefined) {
      //   setCheck(true);
      setResult(JSON.parse(localStorage.getItem("result") || "[]"));
      //   console.log("this will owrk");
    }
    console.log(result);

    const _id = e._id;
    const self_id = result.data._id;
    console.log(self_id);

    axios
      .post("http://localhost:3001/users/like", {
        firstId: self_id,
        secondId: _id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  }
  function chat(e: any) {
    console.log("arai barsangue");
  }
  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="text-black "
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className=" mx-auto">
            {e.firstName} {e.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal flex-col ">
          <div className="flex">
            <img src={e.imgUrl} alt="" className="w-[250px] h-52" />
            <div>
              <p>AGE : {e.age}</p>
              <p>INTEREST : {e.hobby}</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem dolorum soluta laborum excepturi fuga sequi, voluptas
                laboriosam debitis autem porro!
              </p>
              <br />
            </div>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="border-red-500 border-2 first-button"
              onClick={() => {
                dislike(e);
              }}
            >
              dislike
            </button>
            <button
              type="button"
              className="second-button"
              onClick={() => {
                chat(e);
              }}
            >
              chat
            </button>
            <button
              type="button"
              className="third-button"
              onClick={() => {
                like(e);
              }}
            >
              like
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="text-black">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Button
        // variant="primary"
        onClick={() => setModalShow(true)}
        className="infos border-black"
      >
        <img src={e.imgUrl} alt="" />
        <div className="hover-class">
          <h4>NAME : {e.firstName}</h4>
          <h4>AGE : {e.age}</h4>
        </div>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
