import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface TFormInput {
  category: string;
}

interface TUpdateProps {
  categoryItem: string | undefined;
}

const UpdateCategoryForm: React.FC<TUpdateProps> = ({ categoryItem }) => {
  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <label htmlFor="category" className="font-bold ">
        Category Name
      </label>
      <input
        {...register("category")}
        defaultValue={categoryItem}
        className="py-2 pr-5 p-2 rounded-xl shadow-md m-3 border-2 border-gray-400"
      />
    </form>
  );
};

export default UpdateCategoryForm;
