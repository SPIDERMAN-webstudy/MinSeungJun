import Link from "next/link";

export default function layout({ children }) {
  return (
    <div>
      <Link href={"/"}>
        <a>
          <h1>암바홍 게시판</h1>
        </a>
      </Link>
      {children}
    </div>
  );
}
