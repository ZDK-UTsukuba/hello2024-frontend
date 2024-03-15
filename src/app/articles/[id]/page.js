import Link from "next/link";
import { ArticleContent } from "@/components/article-content/ArticleContent";
import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/Footer";
import { MenuBar } from "@/components/menu-bar/MenuBar";

const Page = async ({ params }) => {
  // index.json を読み込む
  const BASE_URL =
    "http://127.0.0.1:8787/posts";
  const jsonUrl = `${BASE_URL}/${params.id}`;
  const jsonResponse = await fetch(jsonUrl);
  const item = await jsonResponse.json();

  const markdown = item.body;

  return (
    <main>
      <Header />
      <div class="wrapper">
        <div class="main-content">
          <div class="heading">
            <h1>{item.name}</h1>
            <time>{item.created_at}</time>
            <p>
              カテゴリ：
              {item.categories.join("/")}
            </p>
          </div>
          <ArticleContent markdown={markdown} />
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
