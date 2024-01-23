import FeaturedMovie from "../../ui/FrotendPage/Featured/FeaturedMovie";
import Footer from "../../ui/FrotendPage/Footer/Footer";
import HeroArea from "../../ui/FrotendPage/Hero/HeroArea";
import Navbar from "../../ui/FrotendPage/Navbar";
import RecentComponent from "../../ui/FrotendPage/Recents/RecentComponent";

const FrontendOutlet = () => {
  return (
    <div className="flex flex-col justify-center bg-[#18191A]">
      <Navbar />
      <HeroArea />
      <FeaturedMovie />
      <RecentComponent />
      <Footer />
    </div>
  );
};

export default FrontendOutlet;
