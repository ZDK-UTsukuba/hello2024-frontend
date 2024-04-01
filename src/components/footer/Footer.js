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
          <Image src="/zdk_logo_full.png" alt="全学学類・専門学群・総合学域群代表者会議 ロゴ画像" width={100} height={25} />
        </a>
      </div>

      <div>
        &copy; 全学学類・専門学群・総合学域群代表者会議 情報処理推進特別委員会 2024
      </div>
    </footer >
  );
};
