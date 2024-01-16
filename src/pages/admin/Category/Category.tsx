import AddCategoryForm from "../../../components/form/AddCategoryForm";
import CategoryTable from "./CategoryTable";

export type TOnSubmit = [category: string];

const Category = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto  justify-center">
      <AddCategoryForm />
      <div className="w-full mx-auto flex justify-center"></div>
      <CategoryTable />
    </div>
  );
};

export default Category;
