import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "./AllContent";

const AllSeires = () => {
  const { data } = useGetmovieQuery({ category: "Web Series" });
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Movie" data={data} />
    </div>
  );
};

export default AllSeires;
