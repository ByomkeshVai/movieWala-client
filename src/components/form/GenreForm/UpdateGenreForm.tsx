import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateGenreMutation } from "../../../redux/api/GenreAPI/genreAPI";

interface TFormInput {
  genre: string;
}

interface TUpdateProps {
  genreID: string | undefined;
  genreItem: string | undefined;
  setIsModalOpen: (valueType: boolean) => void;
}

const UpdateGenreForm: React.FC<TUpdateProps> = ({
  genreID,
  genreItem,
  setIsModalOpen,
}) => {
  const [updateCategory] = useUpdateGenreMutation();

  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    updateCategory({
      genreID: genreID,
      body: { genre: data.genre },
    });

    setIsModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <label htmlFor="genre" className="font-bold ">
        Genre Name
      </label>
      <input
        {...register("genre")}
        defaultValue={genreItem}
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

export default UpdateGenreForm;
