import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/faq-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import FaqItem from "@/components/faq-item/FaqItem";

const Page = async () => {
  // index.json を読み込む
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/faqs";
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <h1>よくある質問</h1>
          <div className="faq-items">
            <FaqItem item={json} />
          </div>
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
