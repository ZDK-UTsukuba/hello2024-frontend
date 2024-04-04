import "@/app/globals.css";
import "@/components/menu-bar/stylesheet.css";
import Link from "next/link";

export const MenuBar = () => {
  const categories = ["宿舎生活", "自転車"];
  return (
    <div className="menu-bar-container">
      <div className="menu-item-wrapper">
        <h2 className="menu-title">メニュー</h2>
        <ul className="menu-items">
          <div className="menu-item">
            <li>
              <Link href={`/article-list/all`}>記事一覧</Link>
            </li>
            <ul className="menu-category">
              {categories.map((category) => (
                <li>
                  <Link href={`/article-list/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-item">
            <li>
              <Link href={`/faq-list`}>よくある質問</Link>
            </li>
          </div>
          /*
          <div className="menu-item">
            <li>
              <Link href={``}>質問フォーム↗</Link>
            </li>
          </div>
          */
        </ul>
      </div>
    </div>
  );
};
