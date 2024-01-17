import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateCategoryMutation } from "../../../redux/api/categoryAPI/categoryAPI";

interface TFormInput {
  category: string;
}

interface TUpdateProps {
  categoryID: string | undefined;
  categoryItem: string | undefined;
  setIsModalOpen: (valueType: boolean) => void;
}

const UpdateCategoryForm: React.FC<TUpdateProps> = ({
  categoryID,
  categoryItem,
  setIsModalOpen,
}) => {
  const [updateCategory] = useUpdateCategoryMutation();

  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    updateCategory({
      categoryID: categoryID,
      body: { category: data.category },
    });

    console.log(categoryItem);
    setIsModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <label htmlFor="category" className="font-bold ">
        Category Name
      </label>
      <input
        placeholder="ex: Movie, Web-Series, Cartoon"
        {...register("category")}
        defaultValue={categoryItem}
        className="py-2 pr-5 p-2 rounded-xl shadow-md m-3 border-2 border-gray-400"
      />
      <div className="flex gap-4 ">
        <button
          className="px-3 py-1 border-2 rounded-xl bg-blue-800 text-slate-50 font-bold"
          type="submit"
        >
          Submit
        </button>
        <button
          className="px-3 py-1 border-2 rounded-xl bg-red-600 text-slate-50 font-bold"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCategoryForm;
