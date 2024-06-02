import { testimonialList } from "../utils/dummy";
import Leftbtn from "../assets/leftbutton.png";
import Rightbtn from "../assets/rightbutton.png";
const Testimonial = () => {
  return (
    <div className="testimoni-container">
      <div className="testimoni">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>

        <div className="testimoni-cards-container">
          {testimonialList.map((data) => (
            <div className="testimoni-cards-items">
              <div className="testimoni-photo">
                <img src={data.photo} alt="" />
              </div>
              <div className="testimoni-review">
                <img src={data.rate} alt="" />
                <p>"{data.review}"</p>
                <p>
                  {data.name}, {data.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimoni-btn">
          <img src={Leftbtn} alt="leftbtn" />
          <img src={Rightbtn} alt="rightbtn" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
