import { useRouter } from "next/router";
import {
  getFirestore,
  query,
  collection,
  onSnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
export default function Detail() {
  const router = useRouter();
  const db = getFirestore();
  const colRef = collection(db, "story");
  const q = query(colRef, where("title", "==", `${router.query.title}`));
  const [story, getStory] = useState([]);
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let storys = [];
      snapshot.docs.forEach((doc) => {
        storys.push({ ...doc.data(), id: doc.id });
      });

      console.log(storys);
      getStory(storys);
    });
  }, []);
  return (
    <div>
      <h4>{router.query.title}</h4>
      {story?.map((user, index) => (
        <div key={index}>
          {user.story}
          <div>
            {user.name} {user.password}
          </div>
        </div>
      ))}
    </div>
  );
}
