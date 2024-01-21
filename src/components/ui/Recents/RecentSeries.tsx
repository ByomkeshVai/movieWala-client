import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentSeries = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <RecentHeaders name="Web Series" color="green" />
      <div>
        <USlider WSize="w-full" />
      </div>
    </div>
  );
};

export default RecentSeries;
