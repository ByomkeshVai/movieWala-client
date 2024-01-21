import Navbar from "../../ui/Navbar";
import HeroArea from "../../ui/Hero/HeroArea";
import FeaturedMovie from "../../ui/Featured/FeaturedMovie";
import RecentComponent from "../../ui/Recents/RecentComponent";

const FrontendLayout = () => {
  return (
    <div className="flex flex-col justify-center bg-[#18191A]">
      <Navbar />
      <HeroArea />
      <FeaturedMovie />
      <RecentComponent />
    </div>
  );
};

export default FrontendLayout;
