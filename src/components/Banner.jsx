import ImageBanner from "../assets/img_car.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-wrapper">
        <div className="banner-left">
          <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <div className="banner-btn">
          <div>
            <Link to={"/SearchCar"}>
                <button>Mulai Sewa Mobil</button>
            </Link>
            
        </div>
            </div>
        </div>
        <div className="banner-right">
          <img src={ImageBanner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
