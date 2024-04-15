import Link from "next/link";
import DateFilter from "../DateFilter";
import TimeCalc from "../TimeCalc";

const ListItem = ({ id, title, date, category }) => {
  const lastupdate = DateFilter(date);
  const elapsed = TimeCalc(lastupdate);

  return (
    <li>
      <div>
        <Link href={`/articles/${id}`}>
          <b>{title}</b>
        </Link>
      </div>
      {date && <div>最終更新：{elapsed}日前</div>}
      カテゴリ：{category}
    </li>
  );
};

export default ListItem;
