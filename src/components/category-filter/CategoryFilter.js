import ListItem from "@/components/list-item/ListItem";

const CategoryFilter = ({ items, category }) => {
  const filteredItems = category.includes("all")
    ? items
    : items.filter((item) => item.categories.includes(decodeURIComponent(category)));

  console.log(decodeURIComponent(category));

  return (
    <>
      {filteredItems.map((item, index) => (
        <ListItem
          className="list-item"
          id={item.number}
          title={item.name}
          date={item.created_at}
          category={item.categories.join("/")}
          key={index}
        />
      ))}
    </>
  );
};

export default CategoryFilter;
