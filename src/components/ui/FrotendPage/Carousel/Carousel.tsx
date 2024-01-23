import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useGetmovieQuery } from "../../../../redux/api/movieAPI/movieAPI";

const Carousel = () => {
  const { data } = useGetmovieQuery(undefined);
  return (
    <div className="lg:w-[35rem] w-96">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -30,
          depth: 300,
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
        {data?.map((movieData) => (
          <SwiperSlide key={movieData._id}>
            <img
              className="object-cover"
              src={movieData?.posterImage}
              alt={movieData.title}
            />
          </SwiperSlide>
        ))}

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
