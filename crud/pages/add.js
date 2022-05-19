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
import styles from "../styles/add.module.css";
import RealButton from "../component/button/RealButton";
import Input from "../component/input/input";
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
    <div className={styles.all}>
      <form onSubmit={handleSubmint}>
        <Input
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="title"
          required
        />
        <br />
        <textarea
          className={styles.ta}
          html={story.current}
          onChange={({ target: { value } }) => (story.current = value)}
          placeholder="story"
          required
        />
        <br />
        <Input
          value={writer}
          onChange={({ target: { value } }) => setWriter(value)}
          placeholder="writer"
          required
        />
        <Input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="password"
          required
        />
        <br />

        <RealButton type="submit"> 글 완성 </RealButton>
        <Link href="/">
          <a>
            <RealButton type="button"> 글 취소 </RealButton>
          </a>
        </Link>
      </form>
    </div>
  );
};
export default add;
