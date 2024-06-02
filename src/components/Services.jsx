import ImageService from "../assets/img_service.png";
import ImageCheck from "../assets/check.png";
import { serviceList } from "../utils/dummy";
const ServiceCar = () => {
  return (
    <div className="service-car-container">
      <div className="service-car">
        <div className="service-car-left">
          <img src={ImageService} alt="logo" width={"440px"} height={"416px"} />
        </div>
        <div className="service-car-right">
          <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className="service-car-items-container">
            {serviceList.map((data) => (
              <div className="service-car-items">
                <img src={ImageCheck} alt="check" />
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCar;
