import Link from "next/link";
import styles from "./Layout.module.css";
export default function layout({ children }) {
  return (
    <div className={styles.a}>
      <Link href={"/"}>
        <a className={styles.h1}>
          <h1>암바홍 게시판</h1>
        </a>
      </Link>
      <div className={styles.border}>{children}</div>
    </div>
  );
}
