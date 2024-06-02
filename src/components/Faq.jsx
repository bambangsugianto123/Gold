import { faqList } from "../utils/dummy";
const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <div className="faq-left">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="faq-right">
          {faqList.map((data) => (
            <div className="faq-right-items">
              <h3>{data.title}</h3>
              <img src="./src/assets/fi_chevron-down.png"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
