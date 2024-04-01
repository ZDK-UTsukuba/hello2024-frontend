import "@/app/globals.css";
import Link from "next/link";


export const Footer = () => {
  return (
    <footer>

      <p>
        <Link href={`/`}>トップページ</Link >
        &nbsp;
        <Link href={`/article-list/all`}>記事一覧</Link >
        &nbsp;
        <Link href={`/faq-list`}>よくある質問</Link >
      </p>
      <p>
        &copy; 全学学類・専門学群・総合学域群代表者会議 情報処理推進特別委員会 2024
      </p>
    </footer >
  );
};
