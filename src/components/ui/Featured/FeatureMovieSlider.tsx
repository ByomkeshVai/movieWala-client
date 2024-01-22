import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const FeatureMovieSlider = () => {
  return (
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
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.etsystatic.com/20512669/r/il/fd4820/1967828617/il_570xN.1967828617_kv3i.jpg"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.pinimg.com/736x/1c/c8/95/1cc895d854e596771bbdeca9f261fd4a.jpg"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" group relative">
            <div className="">
              <img
                className="object-cover h-64 "
                src="https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp"
                alt=""
              />
            </div>
            <div className="hidden group-hover:block h-full absolute top-0 bg-black w-full bg-gradient opacity-90 transition-all">
              <div className="h-64 flex items-left justify-center flex-wrap flex-col gap-5 p-3">
                <h2 className=" text-slate-50 text-sm font-bold">
                  The Last of Us (2023)
                </h2>
                <h2 className=" text-slate-50 text-sm font-semibold">
                  Drama, Family, Romance
                </h2>
                <h2 className=" text-slate-50 text-sm">Rating: 9.2</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeatureMovieSlider;
