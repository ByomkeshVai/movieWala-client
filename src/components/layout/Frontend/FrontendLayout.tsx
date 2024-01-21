import Navbar from "../../ui/Navbar";
import HeroArea from "../../ui/Hero/HeroArea";

const FrontendLayout = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <HeroArea />
    </div>
  );
};

export default FrontendLayout;
