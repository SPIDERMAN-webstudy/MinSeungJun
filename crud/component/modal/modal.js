import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.css";
import Button from "../button/RealButton";
const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else return null;
};
export default Modal;
