import styles from "./Input.module.css";
export default function Input(props) {
  return (
    <input
      id={props.id ? props.id : null}
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required
    />
  );
}
