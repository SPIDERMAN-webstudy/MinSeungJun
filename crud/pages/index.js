import Card from "../component/Card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import RealButton from "../component/button/RealButton";
import Seo from "../component/Seo/Seo";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from "../component/button/button";
import KakaoLog from "../component/login/KakaoLog";
function Home() {
  const router = useRouter();
  const onClicks = (id, title) => {
    router.push(
      {
        pathname: `/${title}`,
        query: {
          title: `${title}`,
        },
      },
      `/${title}`
    );
  };
  const [story, getStory] = useState([]);
  const db = getFirestore();
  const [change, setChange] = useState(false);
  console.log("hi");
  const colRef = collection(db, "story");
  useEffect(() => {
    //collection ref
    onSnapshot(colRef, (snapshot) => {
      let storys = [];
      snapshot.docs.forEach((doc) => {
        storys.push({ ...doc.data(), id: doc.id });
      });
      getStory(storys);
    });
  }, [change]);
  console.log("hi");
  const handledel = async (event) => {
    const docRef = doc(db, "story", event);
    await deleteDoc(docRef);
    change === true ? setChange(fasle) : setChange(true);
  };
  return (
    <div>
      <KakaoLog />
      <Seo title="home" />
      {story?.map((user, index) => (
        <Card key={index}>
          <div
            onClick={() => {
              onClicks(user.id, user.title);
            }}
          >
            {user.title}
          </div>
          <div>
            {user.story.length > 50
              ? `${user.story.slice(0, 50)}...`
              : user.story}
          </div>
          <div>
            {user.name} {user.password}
          </div>
          <Button id={user.id} del={handledel} password={user.password} />
        </Card>
      ))}
      <Link href={`/add`}>
        <a>
          <RealButton>글쓰기</RealButton>
        </a>
      </Link>
    </div>
  );
}
export default Home;
