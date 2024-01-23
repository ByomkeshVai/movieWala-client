import Navbar from "../../ui/FrotendPage/Navbar";

import Footer from "../../ui/FrotendPage/Footer/Footer";
import { Outlet } from "react-router-dom";
import HeroArea from "../../ui/FrotendPage/Hero/HeroArea";
import FeaturedMovie from "../../ui/FrotendPage/Featured/FeaturedMovie";
import RecentComponent from "../../ui/FrotendPage/Recents/RecentComponent";

const FrontendLayout = () => {
  return (
    <div className="flex flex-col justify-center bg-[#18191A]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FrontendLayout;
