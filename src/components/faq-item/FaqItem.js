import Link from "next/link";

const FaqItem = ({ item }) => {
  return (
    <li>
      <div>
          <p>Q: {item.question}</p>
          <p>A: {item.answer}</p>
      </div>
      
    </li>
  );
};

export default FaqItem;
