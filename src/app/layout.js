export const metadata = {
  title: {
    template: "%s - 筑波大学 新入生情報Web 2024",
    default: "筑波大学 新入生情報Web 2024"
  },
  description: "筑波大学の学生宿舎に入居する新入生向けの情報ポータル",
  publisher: "筑波大学 全学学類・専門学群・総合学域群代表者会議",
  openGraph: {
    type: "website",
    site_name: "筑波大学 新入生情報Web 2024",
    locale: "ja_JP",
  }
};

const Layout = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
