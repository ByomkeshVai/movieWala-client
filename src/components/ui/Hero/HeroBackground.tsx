import Marquee from "react-fast-marquee";
import HeroImage from "/public/Hero/HeroImage.jpg";

const HeroBackground = () => {
  return (
    <Marquee direction="down" autoFill speed={15} play={true}>
      <img className="opacity-90 object-cover" src={HeroImage} alt="" />
    </Marquee>
  );
};

export default HeroBackground;
