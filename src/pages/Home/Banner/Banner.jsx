// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../scss/banner.scss";
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <Swiper loop={true} navigation={true} autoplay={{delay: 4000}} speed={1300} modules={[Navigation, Autoplay]} className="mySwiper">
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                Loft<br />
                Мебель
              </h2>
            </div>
            <p className="banner__text">Современная и удобная мебель в Анапе</p>
            <Link to="/catalog" className="banner__btn">Смотреть каталог</Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                Loft <br /> Мебель
              </h2>
            </div>
            <p className="banner__text">Современная и удобная мебель в Анапе</p>
            <Link to="/catalog" className="banner__btn">Смотреть каталог</Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                Loft <br /> Мебель
              </h2>
            </div>
            <p className="banner__text">Современная и удобная мебель в Анапе</p>
            <Link to="/catalog" className="banner__btn">Смотреть каталог</Link>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__info">
              <h2 className="banner__title">
                Loft <br /> Мебель
              </h2>
            </div>
            <p className="banner__text">Современная и удобная мебель в Анапе</p>
            <Link to="/catalog" className="banner__btn">Смотреть каталог</Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
