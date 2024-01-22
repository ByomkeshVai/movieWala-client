import { useGetmovieQuery } from "../../../redux/api/movieAPI/movieAPI";
import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentSeries = () => {
  const { data } = useGetmovieQuery({ category: "Web Series" });
  return (
    <div className="max-w-screen-2xl mx-auto mb-10">
      <RecentHeaders name="Web Series" color="green" />
      <div>
        <USlider WSize="w-full" data={data!} />
      </div>
    </div>
  );
};

export default RecentSeries;
