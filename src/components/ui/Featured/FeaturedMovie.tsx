import FeatureMovieSlider from "./FeatureMovieSlider";
import FeatureSidebar from "./FeatureSidebar";

const FeaturedMovie = () => {
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <div className="flex  justify-between p-10 max-w-screen-2xl mx-auto items-center">
        <FeatureSidebar name="Movies" />

        <FeatureMovieSlider />
      </div>
    </div>
  );
};

export default FeaturedMovie;
