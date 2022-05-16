import { useRef, useState } from "react";
import Link from "next/link";
const add = () => {
  const [title, setTitle] = useState("");
  const story = useRef("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmint = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmint}>
        <input
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="title"
          required
        />
        <br />
        <textarea
          html={story.current}
          onChange={({ target: { value } }) => (story.current = value)}
          placeholder="story"
          required
        />
        <br />
        <input
          value={writer}
          onChange={({ target: { value } }) => setWriter(value)}
          placeholder="writer"
          required
        />
        <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="글 완성" />
        <Link href="/">
          <a>
            <input type="submit" value="글 취소" />
          </a>
        </Link>
      </form>
    </div>
  );
};
export default add;
