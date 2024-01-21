import { Button } from "antd";
import Carousel from "../Carousel/Carousel";
import HeroBackground from "./HeroBackground";

const HeroArea = () => {
  return (
    <div className="hero-container">
      <div className="flex items-center justify-between px-10 mt-10 relative z-20 max-w-screen-2xl mx-auto">
        <div className="absolute z-0 bottom-0 mx-auto">
          <HeroBackground />
        </div>
        <div className="text-area">
          <h2 className="font-bold text-3xl">Download Movies @MovieWala.com</h2>
          <h4 className="text-lg">Easiest Movie Downloading Website.</h4>

          <div className="flex gap-5 mt-5">
            <Button className="font-semibold">Click Here</Button>
            <Button className="font-semibold">Click Me</Button>
          </div>
        </div>
        <div className="carousel-area">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
