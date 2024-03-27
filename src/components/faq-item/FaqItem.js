const FaqItem = ({ item }) => {
  return (
    <>
      {item.map((faq) => (
        <li>
          <div className="faq-item">
            <p className="faq-q">Q: {faq.question}</p>
            <p className="faq-a">A: {faq.answer}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default FaqItem;
