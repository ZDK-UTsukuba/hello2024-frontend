import "@/app/globals.css";
import "@/components/header/stylesheet.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <h1 className="page-title">
        <Link href={`/`}>新入生情報Web</Link>
      </h1>

      <nav>
        <ul className="nav-items">
          <li>
            <Link href={`/article-list/all`}>記事一覧</Link>
          </li>
          <li>
            <Link href={`/faq-list`}>よくある質問</Link>
          </li>
          {/*<li>
            <Link href={``}>質問フォーム↗</Link>
          </li>
          */}
        </ul>
      </nav>
    </header>
  );
};
