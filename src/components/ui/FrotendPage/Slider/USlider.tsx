import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { TMovie } from "../../../../redux/ReduxType/ReduxType";

type TWize = {
  WSize: string;
  data: TMovie[];
};

const USlider = ({ WSize, data }: TWize) => {
  return (
    <div className={`${WSize}`}>
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
        {data?.map((movieData: TMovie) => (
          <SwiperSlide className="">
            <div className=" group relative">
              <div className="">
                <img
                  className="object-fill h-72 w-48"
                  src={movieData?.posterImage}
                  alt={movieData?.title}
                />
              </div>
              <div className="hidden  group-hover:block h-full absolute top-0 bg-black w-48 bg-gradient opacity-90 transition-all">
                <div className="h-72 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                  <h2 className=" text-slate-50 text-sm font-bold">
                    {movieData?.title} ({movieData?.releaseYear})
                  </h2>
                  <h2 className=" text-slate-50 text-sm font-semibold">
                    {movieData?.genre?.join(", ")}
                  </h2>
                  <h2 className=" text-slate-50 text-sm">
                    Rating: {movieData?.rating}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default USlider;
