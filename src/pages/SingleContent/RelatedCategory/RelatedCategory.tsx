/* eslint-disable @typescript-eslint/no-explicit-any */
import AllContent from "../../../components/FilterContent/AllContent";

type RelatedCategoryProps = {
  categoryData: any;
  categoryName: any;
};

const RelatedCategory = ({
  categoryData,
  categoryName,
}: RelatedCategoryProps) => {
  console.log(categoryName);
  return (
    <>
      <AllContent name={categoryName} data={categoryData} />
    </>
  );
};

export default RelatedCategory;
