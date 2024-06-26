import "@/app/globals.css";
import "@/components/header/stylesheet.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <h1 className="page-title">
        <Link href={`/`}>新入生情報Web</Link>
      </h1>
    </header>
  );
};
