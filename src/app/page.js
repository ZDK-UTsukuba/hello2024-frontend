import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import "@/app/globals.css";
import "@/app/stylesheet.css";
import Link from "next/link";

const Page = async () => {
  // index.json を読み込む
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/posts";
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <h2>新情Webとは</h2>
          <p>筑波大学の学生宿舎に入居する新入生向けの情報ポータル</p>
          <div className="selection">
            <li>
              <Link href={`/article-list/all`}>記事一覧</Link>
            </li>
            <li>
              <Link href={`/faq-list`}>よくある質問</Link>
            </li>
          </div>
        </div>
        <MenuBar />
      </div>
    </main>
  );
};

export default Page;
