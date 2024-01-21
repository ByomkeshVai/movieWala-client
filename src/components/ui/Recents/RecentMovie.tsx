import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentMovie = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RecentHeaders name="Movies" color="red" />
      <div>
        <USlider WSize="w-full" />
      </div>
    </div>
  );
};

export default RecentMovie;
