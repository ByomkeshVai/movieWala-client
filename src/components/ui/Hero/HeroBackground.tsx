import Marquee from "react-fast-marquee";
import HeroImage from "/Hero/HeroImage.jpg";

type HeroBackgroundProps = {
  height: string;
};

const HeroBackground = ({ height }: HeroBackgroundProps) => {
  return (
    <Marquee
      direction="right"
      autoFill
      speed={15}
      play={true}
      loop={99999999}
      className={height}
    >
      <img className="opacity-90 " src={HeroImage} alt="" />
    </Marquee>
  );
};

export default HeroBackground;
