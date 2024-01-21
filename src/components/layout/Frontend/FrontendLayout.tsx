import Navbar from "../../ui/Navbar";
import HeroArea from "../../ui/Hero/HeroArea";
import FeaturedMovie from "../../ui/Featured/FeaturedMovie";

const FrontendLayout = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <HeroArea />
      <FeaturedMovie />=
    </div>
  );
};

export default FrontendLayout;
