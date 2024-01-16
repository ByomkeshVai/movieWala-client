import { useForm } from "react-hook-form";
import { useAddCategoryMutation } from "../../redux/api/categoryAPI/categoryAPI";

const AddCategoryForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [addCategory, { isLoading, isSuccess }] = useAddCategoryMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    addCategory(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex flex-col mx-auto gap-2"
    >
      <div className="flex items-center gap-3">
        <label htmlFor="category" className="font-bold ">
          Category:
        </label>
        <input
          className=" py-2 pr-5 p-2 rounded-xl shadow-md"
          placeholder="ex: Movie, Anime, Web-Series"
          {...register("category", { required: true })}
          aria-invalid={errors.category ? "true" : "false"}
        />
      </div>
      {errors.category?.type === "required" && (
        <p role="alert" className="text-red-400 mb-3 text-center">
          Category Name is required
        </p>
      )}
      <button className="text-slate-50 font-bold bg-blue-600 border-1 p-2 rounded-lg shadow-md px-5">
        Submit
      </button>
    </form>
  );
};

export default AddCategoryForm;
