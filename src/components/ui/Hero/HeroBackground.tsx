import Marquee from "react-fast-marquee";
import HeroImage from "/public/Hero/HeroImage.jpg";

const HeroBackground = () => {
  return (
    <Marquee
      direction="right"
      autoFill
      speed={15}
      play={true}
      loop={99999999}
      className="h-96"
    >
      <img className="opacity-90 " src={HeroImage} alt="" />
    </Marquee>
  );
};

export default HeroBackground;
