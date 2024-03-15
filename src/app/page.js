import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import "@/app/globals.css";
import "@/app/stylesheet.css";
import Link from "next/link";

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
          <h2>新情Webとは</h2>
          <p>筑波大学の学生宿舎に入居する新入生向けの情報ポータル</p>
          <div class="selection">
            <li><Link href={`/article-list`}>記事一覧</Link></li>
            <li><Link href={``}>よくある質問</Link></li>
          </div>
        </div>
        <MenuBar />
      </div>
    </main>
  );
};

export default Page;
