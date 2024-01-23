import { Button } from "antd";
import Carousel from "../Carousel/Carousel";
import HeroBackground from "./HeroBackground";

const HeroArea = () => {
  return (
    <>
      <div className="hero-container h-96 ">
        <div className=" z-0 absolute ">
          <HeroBackground height="h-96" />
        </div>
        <div className="flex lg:items-center lg:justify-between justify-center flex-wrap px-10 lg:py-0  relative z-20 max-w-screen-2xl mx-auto">
          <div className="text-area lg:mt-10 mt-8 text-center lg:text-left">
            <h2 className="font-bold lg:text-3xl text-lg text-slate-100 ">
              Download Movies @MovieWala.com
            </h2>
            <h4 className="lg:text-lg text-slate-100 mt-3">
              Easiest Movie Downloading Website.
            </h4>

            <div className="flex gap-5 mt-5 justify-center lg:justify-start">
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
