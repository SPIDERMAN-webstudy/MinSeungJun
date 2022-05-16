import Card from "../component/Card/Card";
import Link from "next/link";
import Seo from "../component/Seo/Seo";
const dummy = [
  {
    title: "여성가족부 폐지논란",
    story:
      "여성정책의 기획·종합 및 여성의 권익증진 청소년의 육성·복지및 보호 가족과 다문화 가족정책의 수립·조정·지원 여성·아동·청소년에 대한 폭력피해 예방 및 보호",
    write: "looma",
    date: "2022-05-22",
    time: "22:20",
    password: "1234",
  },
  {
    title: "여성가족부 폐지논란",
    story:
      "여성정책의 기획·종합 및 여성의 권익증진 청소년의 육성·복지및 보호 가족과 다문화 가족정책의 수립·조정·지원 여성·아동·청소년에 대한 폭력피해 예방 및 보호",
    write: "dong",
    date: "2022-05-22",
    time: "22:20",
    password: "1234",
  },
];
function Home() {
  return (
    <div>
      <Seo title="home" />
      {dummy.map((user, index) => (
        <Card key={index}>
          <Link href={`/about`}>
            <a>{user.title}</a>
          </Link>
          <div>
            {user.story.length > 50
              ? `${user.story.slice(0, 50)}...`
              : user.story}
          </div>
          <div>
            {user.write} {user.date} {user.time} {user.password}
          </div>
        </Card>
      ))}
      <Link href={`/add`}>
        <a>
          <button>글쓰기</button>
        </a>
      </Link>
    </div>
  );
}
export default Home;
