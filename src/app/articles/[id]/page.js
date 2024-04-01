import Link from "next/link";
import { ArticleContent } from "@/components/article-content/ArticleContent";
import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import "@/app/articles/stylesheet.css";

const Page = async ({ params }) => {
  // index.json を読み込む
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/posts";
  const jsonUrl = `${BASE_URL}/${params.id}`;
  const jsonResponse = await fetch(jsonUrl);
  const item = await jsonResponse.json();

  const markdown = item.body;

  return (
    <main>
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <div className="heading">
            <h1>{item.name}</h1>
            <time>{item.created_at}</time>
            <p>
              カテゴリ：
              {item.categories.join("/")}
            </p>
          </div>
          <ArticleContent markdown={markdown} />
          <div className="return">
            <Link href={`/`}>トップに戻る</Link>
          </div>
        </div>
        <MenuBar />
      </div>
    </main>
  );
};

export async function generateMetadata({params}) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + "/posts";
  const jsonUrl = `${BASE_URL}/${params.id}`;
  const jsonResponse = await fetch(jsonUrl);
  const item = await jsonResponse.json();
  return {
    title: item.name,
    description: "筑波大学の学生宿舎に関する基本的な情報や宿舎内の設備、部屋の内装などについて"
  }
}

export default Page;
