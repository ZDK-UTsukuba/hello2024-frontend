import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import Link from "next/link";
import "@/app/globals.css";
import "@/app/faq-list/stylesheet.css";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import FaqItem from "@/components/faq-item/FaqItem";

const Page = async () => {
  // index.json を読み込む
  const url = process.env.NEXT_PUBLIC_BACKEND_HOST + "/faqs";
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

export async function generateMetadata() {
  return {
    title: "よくある質問",
    description: "宿舎入居について全代会へよく寄せられる質問について"
  }
}

export default Page;
