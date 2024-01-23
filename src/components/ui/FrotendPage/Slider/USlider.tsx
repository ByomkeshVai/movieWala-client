import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { TMovie } from "../../../../redux/ReduxType/ReduxType";
import { useNavigate } from "react-router-dom";

type TWize = {
  WSize: string;
  data: TMovie[];
};

const USlider = ({ WSize, data }: TWize) => {
  const navigate = useNavigate();
  return (
    <div className={`lg:${WSize} w-[65rem]`}>
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
          <SwiperSlide
            className="cursor-pointer"
            onClick={() =>
              navigate(
                `/singleContent/${movieData?.category}/${movieData?._id}`
              )
            }
          >
            <div className=" group relative">
              <div className="">
                <img
                  className="lg:object-fill lg:h-72 lg:w-48 object-cover h-64"
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
