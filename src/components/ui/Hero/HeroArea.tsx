import { Button } from "antd";
import Carousel from "../Carousel/Carousel";
import HeroBackground from "./HeroBackground";

const HeroArea = () => {
  return (
    <>
      <div className="hero-container h-96 ">
        <div className=" z-0 absolute">
          <HeroBackground />
        </div>
        <div className="flex items-center justify-between px-10  relative z-20 max-w-screen-2xl mx-auto">
          <div className="text-area mt-10">
            <h2 className="font-bold text-3xl text-slate-100">
              Download Movies @MovieWala.com
            </h2>
            <h4 className="text-lg text-slate-100 mt-3">
              Easiest Movie Downloading Website.
            </h4>

            <div className="flex gap-5 mt-5">
              <Button className="font-semibold text-slate-100">
                Click Here
              </Button>
              <Button className="font-semibold text-slate-100">Click Me</Button>
            </div>
          </div>
          <div className="carousel-area mt-10">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
