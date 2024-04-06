import Link from "next/link";
import { ArticleContent } from "@/components/article-content/ArticleContent";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { MenuBar } from "@/components/menu-bar/MenuBar";
import DateFilter from "@/components/DateFilter";
import TimeCalc from "@/components/TimeCalc";
import "@/app/articles/stylesheet.css";
import { FONT_MANIFEST } from "next/dist/shared/lib/constants";

export const runtime = 'edge';

const Page = async ({ params }) => {
  // index.json を読み込む
  const jsonUrl = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/posts/${params.id}`;
  const jsonResponse = await fetch(jsonUrl);
  const item = await jsonResponse.json();

  const lastupdate = DateFilter(item.created_at);
  const elapsed = TimeCalc(lastupdate);
  const markdown = item.body;

  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
          {
              "@type": "BreadcrumbList",
              "@id": `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/article/${item.number}#breadcrumbList`,
              itemListElement: [{
                "@type": "ListItem",
                position: 1,
                name: item.categories.join("/"),
                item: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/article-list/${item.categories.join("/")}`
              },{
                "@type": "ListItem",
                position: 2,
                name: item.name,
                item: `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/article/${item.number}`
              }]
          },
          {
              "@type": "Article",
              "@id": `${process.env.NEXT_PUBLIC_FRONTEND_HOST}/article/${item.number}#article`,
              author: {
                  "@type": "Organization",
                  name: "全学学類・専門学群・総合学域群代表者会議",
                  url: "https://www.zdk.tsukuba.ac.jp",
              },
              datePublished: item.created_at,
              headline: item.name
          }
      ]
  };

  

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <div className="wrapper">
        <div className="main-content">
          <div className="heading">
            <h1>{item.name}</h1>
            <time>最終更新：{elapsed}日前（{lastupdate.toLocaleString()}）</time>
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
      <Footer />
    </main>
  );
};

export async function generateMetadata({params}) {
  const jsonUrl = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/posts/${params.id}`;
  const jsonResponse = await fetch(jsonUrl);
  const item = await jsonResponse.json();
  return {
    title: item.name,
    description: "筑波大学の学生宿舎に関する基本的な情報や宿舎内の設備、部屋の内装などについて"
  }
}

export default Page;
