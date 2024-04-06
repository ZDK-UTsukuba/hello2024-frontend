import Link from "next/link";
import DateFilter from "../DateFilter";

const ListItem = ({ id, title, date, category }) => {
  const lastupdate = DateFilter(date);

  return (
    <li>
      <div>
        <Link href={`/articles/${id}`}>
          <b>{title}</b>
        </Link>
      </div>
      {date && <div>最終更新：{lastupdate.toLocaleString()}</div>}
      カテゴリ：{category}
    </li>
  );
};

export default ListItem;
