import ListItem from "@/components/ListItem";
import { Header } from "@/components/Header";
import "@/app/globals.css";

const Page = async () => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/posts`;
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div class="main-content">
        <h2>新情Webとは</h2>
        <p>筑波大学の学生宿舎に入居する新入生向けの情報ポータル</p>
        <ul>
          {json.map((item, index) => (
            <ListItem
              id={item.number}
              title={item.name}
              date={item.created_at}
              key={index}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
