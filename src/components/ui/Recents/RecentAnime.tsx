import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentAnime = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RecentHeaders name="Anime" color="blue" />
      <div>
        <USlider WSize="w-full" />
      </div>
    </div>
  );
};

export default RecentAnime;
