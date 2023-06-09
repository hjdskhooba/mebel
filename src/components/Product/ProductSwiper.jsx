import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../scss/product.scss";

import { FreeMode, Navigation, Thumbs } from "swiper";

export default ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product__swiper">
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        navigation={false}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={product.images[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[1].includes("https")
                ? "../../" + product.images[1]
                : product.images[1]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[1].includes("https")
                ? "../../" + product.images[2]
                : product.images[1]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[3].includes("https")
                ? "../../" + product.images[3]
                : product.images[3]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress={true}
        className="mySwiper"
        spaceBetween={12}
        slidesPerView={4}
        navigation={true}
        freeMode={true}
      >
        <SwiperSlide>
          <img src={product.images[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[1].includes("https")
                ? "../../" + product.images[1]
                : product.images[1]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[1].includes("https")
                ? "../../" + product.images[2]
                : product.images[1]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              !product.images[3].includes("https")
                ? "../../" + product.images[3]
                : product.images[3]
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
