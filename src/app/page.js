import Form from "@/components/Form";
import ListItem from "@/components/ListItem";

const Page = async ({ searchParams }) => {
  // index.json を読み込む
  const url = `http://127.0.0.1:8787/posts`;
  const response = await fetch(url);
  const json = await response.json();

  const keyword = searchParams.keyword ?? "";

  return (
    <main>
      <h1>新情Web</h1>
      <h2>新情Webとは</h2>
      <p>筑波大学の学生宿舎に入居する新入生向けの情報ポータル</p>
      <ul>
        <Form items={json} keyword={keyword} />  
      </ul>
    </main>
  );
};

export default Page;