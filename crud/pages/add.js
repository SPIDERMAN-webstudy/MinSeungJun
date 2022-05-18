import { useRef, useState } from "react";
import Link from "next/link";
import {
  addDoc,
  getFirestore,
  collection,
  getDoc,
  Firestore,
} from "firebase/firestore";
import { useRouter } from "next/router";
const add = () => {
  const router = useRouter();
  const onClicks = (title) => {
    router.push(
      {
        pathname: `${title}`,
        query: {
          title: `${title}`,
        },
      },
      `${title}`
    );
  };
  const [title, setTitle] = useState("");
  const story = useRef("");
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmint = async (event) => {
    event.preventDefault();
    const db = getFirestore();
    const colRef = collection(db, "story");
    await addDoc(colRef, {
      title: title,
      story: story.current,
      password: password,
      name: writer,
      date: new Date(),
    });
    onClicks(title);
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
            <input type="button" value="글 취소" />
          </a>
        </Link>
      </form>
    </div>
  );
};
export default add;
