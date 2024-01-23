import { useGetmovieQuery } from "../../redux/api/movieAPI/movieAPI";
import AllContent from "../../components/FilterContent/AllContent";
import AllMainSection from "../../components/FilterContent/AllMainSection";

const AllSeires = () => {
  const { data } = useGetmovieQuery({ category: "Web Series" });
  return (
    <div className="bg-[#0E0D12] bg-opacity-100 shadow-xl  py-10 ">
      <AllContent name="Web Series" data={data} />
      <AllMainSection values="Web Series" />
    </div>
  );
};

export default AllSeires;
