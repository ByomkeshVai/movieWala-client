import { useGetmovieQuery } from "../../../../redux/api/movieAPI/movieAPI";
import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentMovie = () => {
  const { data } = useGetmovieQuery({ category: "Movie" });
  return (
    <div className="max-w-screen-2xl mx-auto mb-8">
      <RecentHeaders name="Movies" color="red" />
      <div>
        <USlider WSize="w-full" data={data!} />
      </div>
    </div>
  );
};

export default RecentMovie;
