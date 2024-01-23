import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "./AllContent";

const AllAnime = () => {
  const { data } = useGetmovieQuery({ category: "Anime" });
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Anime" data={data} />
    </div>
  );
};

export default AllAnime;
