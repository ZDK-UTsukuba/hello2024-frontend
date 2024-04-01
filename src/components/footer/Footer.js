import "@/app/globals.css";
import "./stylesheet.css";
import Link from "next/link";
import Image from 'next/image';


export const Footer = () => {
  return (
    <footer className="footer-all">

      <p className="footer-list">
        <Link href={`/`}>トップページ</Link >
        &emsp;
        <Link href={`/article-list/all`}>記事一覧</Link >
        &emsp;
        <Link href={`/faq-list`}>よくある質問</Link >
      </p>

      <div >
        <a href="https://www.stb.tsukuba.ac.jp/~zdk/">
          <Image src="/zdk_logo_full.png" alt="全学学類・専門学群・総合学域群代表者会議 ロゴ画像" width={200} height={50} />
        </a>
      </div>

      <div>
        &copy; 全学学類・専門学群・総合学域群代表者会議 2024
        <br />
        新入生歓迎特別委員会、生活環境委員会、情報処理推進特別委員会
      </div>
    </footer >
  );
};
