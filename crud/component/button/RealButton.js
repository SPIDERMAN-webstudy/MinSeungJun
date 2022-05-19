import styles from "./RealButton.module.css";
export default function Button({ type, onClick, children }) {
  return (
    <button
      className={`${styles.btn} ${styles.first}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
