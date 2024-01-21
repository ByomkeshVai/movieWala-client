import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 500,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.pinimg.com/736x/1c/c8/95/1cc895d854e596771bbdeca9f261fd4a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            src="https://i.ebayi8 h-56mg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
