const FaqItem = ({ item }) => {
  return (
    <>
      {item.map((faq) => (
        <div className="faq-item">
          <h2 className="faq-q">Q: {faq.question}</h2>
          <p className="faq-a">A: {faq.answer}</p>
        </div>
      ))}
    </>
  );
};

export default FaqItem;
