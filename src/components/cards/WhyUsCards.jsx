import { whyUsData } from "../../utils/dummy";
const WhyUsCards = () => {
  return (
    <div className="why-us-cards-container">
      {whyUsData.map((data) => (
        <div className="why-us-cards">
          <div className="why-us-items">
            <img src={data.icon} alt="logo" />
            <p>{data.title}</p>
            <p>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUsCards;
