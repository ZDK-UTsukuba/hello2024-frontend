import "@/app/globals.css";
import "@/components/header/stylesheet.css";
import Link from "next/link";

export const Header = () => {
  const categories = ["宿舎生活", "自転車"];
  return (
    <header>
      <h1 className="page-title">
        <Link href={`/`}>新入生情報Web</Link>
      </h1>

      <nav>
        <ul className="nav-items">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/article-list/${category}`}>記事：{category}</Link>
            </li>
          ))}
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
