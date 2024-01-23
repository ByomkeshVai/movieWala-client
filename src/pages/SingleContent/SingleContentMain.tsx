import { useParams } from "react-router-dom";
import Footer from "../../components/ui/FrotendPage/Footer/Footer";
import Navbar from "../../components/ui/FrotendPage/Navbar";
import SingleContent from "./SingleContent";
import { useSingleMovieQuery } from "../../redux/api/movieAPI/movieAPI";

const SingleContentMain = () => {
  const { category, itemId } = useParams();
  const { data } = useSingleMovieQuery(itemId);

  console.log(data);
  return (
    <div className="flex flex-col justify-center bg-[#18191A]">
      <Navbar />
      <SingleContent data={data} />
      <Footer />
    </div>
  );
};

export default SingleContentMain;
