import { useState } from "react";

import Modal from "../modal/modal";

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
      <button onClick={() => setShowModal(true)}>🧇</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <form onSubmit={handleSub}>
          <label htmlFor="pass">비밀번호:</label>
          <input
            id="pass"
            value={pass}
            onChange={({ target: { value } }) => setPass(value)}
            required
            placeholder="password"
          ></input>
          <button type="submit">확인</button>
        </form>
      </Modal>
    </div>
  );
};
export default Button;
