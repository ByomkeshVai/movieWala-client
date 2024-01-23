import { useParams } from "react-router-dom";
import Footer from "../../components/ui/FrotendPage/Footer/Footer";
import Navbar from "../../components/ui/FrotendPage/Navbar";
import SingleContent from "./SingleContent";
import {
  useGetmovieQuery,
  useSingleMovieQuery,
} from "../../redux/api/movieAPI/movieAPI";
import RelatedCategory from "./RelatedCategory/RelatedCategory";

const SingleContentMain = () => {
  const { category: categoryName, itemId } = useParams();
  const { data } = useSingleMovieQuery(itemId);

  const { data: categoryData } = useGetmovieQuery({ category: categoryName });

  return (
    <div className="flex flex-col justify-center bg-[#18191A]">
      <Navbar />
      <SingleContent data={data} />
      <RelatedCategory
        categoryData={categoryData}
        categoryName={categoryName}
      />
      <Footer />
    </div>
  );
};

export default SingleContentMain;
