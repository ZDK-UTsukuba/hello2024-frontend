import { redirect } from "next/navigation";
import ListItem from "./ListItem";

const Form = ({ items, keyword }) => {
  const action = async (formData) => {
    "use server";
    const newKeyword = formData.get("keyword");
    redirect(`/?keyword=${encodeURI(newKeyword)}`);
  };

  const filteredItems =
    keyword.length > 0
      ? items.filter((item) => item.title.includes(keyword))
      : items;

  return (
    <>
      {filteredItems.map((item, index) => (
        <ListItem
          id={item.number}
          title={item.name}
          date={item.created_at}
          key={index}
        />
      ))}
    </>
  );
};

export default Form;