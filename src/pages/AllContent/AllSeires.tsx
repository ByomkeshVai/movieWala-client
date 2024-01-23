import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "../../components/FilterContent/AllContent";
import AllMainSection from "../../components/FilterContent/AllMainSection";
import { useNavigate } from "react-router-dom";

const AllSeires = () => {
  const { data } = useGetmovieQuery({ category: "Web Series" });

  const navigate = useNavigate();

  const handleSingleMovie = (category: string, itemId: string) => {
    navigate(`/singleContent/${category}/${itemId}`);
  };
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Web Series" data={data} />
      <AllMainSection values="Movie" handleSingleMovie={handleSingleMovie} />
    </div>
  );
};

export default AllSeires;
