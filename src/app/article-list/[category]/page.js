import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/article-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import CategoryFilter from "@/components/category-filter/CategoryFilter";

const Page = async ({ params }) => {
  // index.json を読み込む
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/posts";
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  const keyword = params["category"];

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <h1>記事一覧</h1>
          <ul>
            <CategoryFilter items={json} category={keyword} />
          </ul>
          <div className="return">
            <Link href={`/`}>トップに戻る</Link>
          </div>
        </div>
        <MenuBar />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
