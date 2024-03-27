import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/article-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import CategoryFilter from "@/components/category-filter/CategoryFilter";

const Page = async ({ params }) => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/posts`;
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  const keyword = params["category"];

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <h2>記事一覧</h2>
          <ul>
            <CategoryFilter items={json} category={keyword} />
          </ul>
          <div className="return">
            <Link href={`/`}>トップに戻る</Link>
          </div>
        </div>
        <MenuBar />
      </div>
    </main>
  );
};

export default Page;
