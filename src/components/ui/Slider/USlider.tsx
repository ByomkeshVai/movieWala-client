import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

type TWize = {
  WSize: string;
};

const USlider = ({ WSize }: TWize) => {
  return (
    <div className={WSize}>
      <Swiper
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        spaceBetween={20}
        slidesPerView={6}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <img
            className="object-cover h-64"
            src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.pinimg.com/736x/1c/c8/95/1cc895d854e596771bbdeca9f261fd4a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.pinimg.com/736x/1c/c8/95/1cc895d854e596771bbdeca9f261fd4a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover h-64 "
            src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default USlider;
