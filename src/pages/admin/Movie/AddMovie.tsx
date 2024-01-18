import { useForm, SubmitHandler } from "react-hook-form";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";

interface IFormInput {
  title: string;
}

const AddMovie = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data } = useGetCategoryQuery(undefined);

  const categoriesData = data || [];

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === "required" && (
            <p role="alert">Title is required</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            {...register("description", { required: true })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description?.type === "required" && (
            <p role="alert">description is required</p>
          )}
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <label htmlFor="category">Category</label>
          <select
            {...register("category", { required: true })}
            aria-invalid={errors.category ? "true" : "false"}
          >
            {categoriesData.map((categoryObj, index) => (
              <option key={index} value={categoryObj.category}>
                {categoryObj.category}
              </option>
            ))}
          </select>
          {errors.category?.type === "required" && (
            <p role="alert">Category is required</p>
          )}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
