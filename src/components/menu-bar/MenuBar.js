import "@/app/globals.css";
import "@/components/menu-bar/stylesheet.css";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <div className="menu-bar-container">
      <h2 className="menu-title">メニュー</h2>
      <ul>
        <li className="menu-item">
          <Link href={`/article-list/all`}>記事一覧</Link>
        </li>
        <ul className="menu-category">
          <li>
            <Link href={`/article-list/test`}>test</Link>
          </li>
          <li>
            <Link href={`/article-list/宿舎`}>宿舎</Link>
          </li>
          <li>
            <Link href={`/article-list/自転車`}>自転車</Link>
          </li>
        </ul>
        <li className="menu-item">
          <Link href={``}>よくある質問</Link>
        </li>
        {/* この下にFAQ */}
      </ul>
    </div>
  );
};
