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

  const keyword = params["category"];

  console.log(params);

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
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
