import ListItem from "@/components/list-item/ListItem";
import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/article-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";

const Page = async () => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/posts`;
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div class="wrapper">
        <div class="main-content">
          <ul>
            {json.map((item, index) => (
              <ListItem class="list-item"
                id={item.number}
                title={item.name}
                date={item.created_at}
                categories={item.categories.join("/")}
                key={index}
              />
            ))}
          </ul>
          <div class="return">
            <Link href={`/`}>トップに戻る</Link>
          </div>
        </div>
        <MenuBar />
      </div>
    </main>
  );
};

export default Page;
