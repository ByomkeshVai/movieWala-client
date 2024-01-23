import FeatureSidebar from "../ui/FrotendPage/Featured/FeatureSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TMovie } from "../../redux/ReduxType/ReduxType";
import { useNavigate } from "react-router-dom";

type AllContentProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
};

const AllContent = ({ name, data }: AllContentProps) => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex lg:justify-between p-10 max-w-screen-2xl mx-auto items-center">
      <FeatureSidebar name={name} />
      <div className="w-[65rem]">
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
                    className="object-cover h-64 "
                    src={movieData?.posterImage}
                    alt={movieData?.title}
                  />
                </div>
                <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
                  <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
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
    </div>
  );
};

export default AllContent;
