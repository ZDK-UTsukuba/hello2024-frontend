const FaqItem = ({ item }) => {
  return (
    <>
      {item.map((faq) => (
        <div className="faq-item">
          <h3 className="faq-q">Q: {faq.question}</h3>
          <p className="faq-a">A: {faq.answer}</p>
        </div>
      ))}
    </>
  );
};

export default FaqItem;
