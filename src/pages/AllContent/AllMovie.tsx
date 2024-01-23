import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "./AllContent";
import AllMainSection from "./AllMainSection";

const AllMovie = () => {
  const { data } = useGetmovieQuery({ category: "Movie" });
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Movie" data={data} />
      <AllMainSection />
    </div>
  );
};

export default AllMovie;
