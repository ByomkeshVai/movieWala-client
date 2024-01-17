import { useForm } from "react-hook-form";
import { Alert } from "antd";
import { useEffect, useState } from "react";
import { useAddGenreMutation } from "../../../redux/api/GenreAPI/genreAPI";

const AddGenreForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [addGenre, { data, isLoading, isSuccess, isError }] =
    useAddGenreMutation(undefined);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    addGenre(data);
  };

  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setSuccessAlertVisible(true);
      const successTimeout = setTimeout(() => {
        setSuccessAlertVisible(false);
      }, 5000);

      return () => clearTimeout(successTimeout);
    } else if (isError) {
      setErrorAlertVisible(true);
      const errorTimeout = setTimeout(() => {
        setErrorAlertVisible(false);
      }, 5000);

      return () => clearTimeout(errorTimeout);
    }
  }, [isSuccess, isError]);

  return (
    <>
      {successAlertVisible && (
        <Alert description={data?.message} type="success" closable />
      )}
      {errorAlertVisible && (
        <Alert description="Something Went Wrong" type="error" closable />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col mx-auto gap-2"
      >
        <div className="flex items-center gap-3">
          <label htmlFor="genre" className="font-bold ">
            Genre:
          </label>
          <input
            className=" py-2 pr-5 p-2 rounded-xl shadow-md"
            placeholder="ex: Action, Drama, Thriller"
            {...register("genre", { required: true })}
            aria-invalid={errors.genre ? "true" : "false"}
          />
        </div>
        {errors.genre?.type === "required" && (
          <p role="alert" className="text-red-400 mb-3 text-center">
            Genre Name is required
          </p>
        )}
        <button
          className="text-slate-50 font-bold bg-blue-600 border-1 p-2 rounded-lg shadow-md px-5"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddGenreForm;
