import Link from "next/link";
import { ArticleContent } from "@/components/ArticleContent";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

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
      </div>
      <footer>
        <Link href={`/`}>トップに戻る</Link>
      </footer>
    </main>
  );
};

export default Page;
