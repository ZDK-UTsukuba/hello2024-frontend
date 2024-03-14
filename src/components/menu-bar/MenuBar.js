import "@/app/globals.css";
import "@/components/menu-bar/stylesheet.css";
import Link from "next/link";

export const MenuBar = () => {
  return (
    <div class="menu-bar-container">
        <h2 class="menu-title">メニュー</h2>
        <ul>
            <li class="menu-item">記事一覧</li>
            <ul>
                <li class="menu-category"><Link href={``}>宿舎</Link></li>
                <li class="menu-category"><Link href={``}>自転車</Link></li>
            </ul>
            <li class="menu-item">よくある質問</li>
            {/* この下にFAQ */}
        </ul>
    </div>
  );
};
