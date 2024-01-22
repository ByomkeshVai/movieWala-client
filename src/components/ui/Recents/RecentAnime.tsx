import { useGetmovieQuery } from "../../../redux/api/movieAPI/movieAPI";
import USlider from "../Slider/USlider";
import RecentHeaders from "./RecentHeaders";

const RecentAnime = () => {
  const { data } = useGetmovieQuery({ category: "Anime" });

  return (
    <div className="max-w-screen-2xl mx-auto mb-8">
      <RecentHeaders name="Anime" color="blue" />
      <div>
        <USlider WSize="w-full" data={data!} />
      </div>
    </div>
  );
};

export default RecentAnime;
