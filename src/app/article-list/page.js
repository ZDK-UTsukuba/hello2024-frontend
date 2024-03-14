import ListItem from "@/components/ListItem";
import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
import Link from "next/link";
import "@/app/globals.css";

const Page = async () => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/posts`;
  const response = await fetch(url);
  const json = await response.json();

  return (
    <main>
      <Header />
      <div class="main-content">
        
        <ul>
          {json.map((item, index) => (
            <ListItem
              id={item.number}
              title={item.name}
              date={item.created_at}
              key={index}
            />
          ))}
        </ul>
      </div>
      <footer>
        <Link href={`/`}>トップに戻る</Link>
      </footer>
    </main>
  );
};

export default Page;
