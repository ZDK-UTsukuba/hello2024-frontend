import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/article-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import FaqItem from "@/components/faq-item/FaqItem";

const Page = async () => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/faqs`;
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <h2>よくある質問</h2>
          <ul>
            <FaqItem item={json} />
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
