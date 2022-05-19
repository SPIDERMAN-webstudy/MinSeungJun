import { useState } from "react";

import styles from "./Button.module.css";
import Modal from "../modal/modal";
import Input from "../input/input";
import RealButton from "./RealButton";
const Button = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [pass, setPass] = useState("");
  const handleSub = (event) => {
    event.preventDefault();
    if (props.password === pass) {
      setPass("");
      setShowModal(false);
      props.del(props.id);
    } else {
      alert("다시입력해주세여");
      setPass("");
    }
  };
  return (
    <div>
      <button
        className={`${styles.btn} ${styles.first}`}
        onClick={() => setShowModal(true)}
      >
        삭제
      </button>
      <Modal show={showModal}>
        <form onSubmit={handleSub}>
          <label htmlFor="pass">비밀번호:</label>
          <Input
            id="pass"
            value={pass}
            onChange={({ target: { value } }) => setPass(value)}
            required
            placeholder="password"
          />
          <RealButton type="submit">확인</RealButton>
          <RealButton type="button" onClick={() => setShowModal(false)}>
            닫기
          </RealButton>
        </form>
      </Modal>
    </div>
  );
};
export default Button;
