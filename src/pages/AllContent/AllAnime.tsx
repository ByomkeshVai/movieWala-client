import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "../../components/FilterContent/AllContent";
import AllMainSection from "../../components/FilterContent/AllMainSection";

const AllAnime = () => {
  const { data } = useGetmovieQuery({ category: "Anime" });
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Anime" data={data} />
      <AllMainSection values="Anime" />
    </div>
  );
};

export default AllAnime;
