import { Controller, FieldValues, useForm } from "react-hook-form";
import MWForm from "../FormFields/MWForm";
import MWInput from "../FormFields/MWInput";
import { Button, Select } from "antd";
import MWSelect from "../FormFields/MWSelect";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";
import { useGetGenreQuery } from "../../../redux/api/GenreAPI/genreAPI";
import { useGetLanguageQuery } from "../../../redux/api/languageAPI/languageAPI";
import { useAddMovieMutation } from "../../../redux/api/movieAPI/movieAPI";
import MWUploadForm from "../FormFields/MWUploadForm";
import { useState } from "react";
import toast from "react-hot-toast";
import MWInputNumber from "../FormFields/MWInputNumber";

const AddMovieForm = () => {
  const { reset } = useForm();
  const { data: categoryData } = useGetCategoryQuery(undefined);
  const { data: genreData } = useGetGenreQuery(undefined);
  const { data: LanguageData } = useGetLanguageQuery(undefined);

  const [movieImage, setMovieImage] = useState("");
  const [addMovies, { isSuccess, isError }] = useAddMovieMutation();

  const onSubmit = async (data: FieldValues) => {
    const movies = [data.movieLink];

    const modifiedData = {
      ...data,
      movieLink: movies,
      posterImage: movieImage,
    };

    addMovies(modifiedData);

    if (isSuccess) {
      reset();
      setMovieImage("");
      toast.success("Successfully created Movie!");
    }

    if (isError) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <MWForm onSubmit={onSubmit} isSuccess={isSuccess}>
        <MWInput
          label="Title"
          type="text"
          name="title"
          placeholder="Add Title"
        />
        <MWInput
          label="description"
          type="text"
          name="description"
          placeholder="Add description"
        />
        <MWInput
          label="Release Year"
          type="text"
          name="releaseYear"
          placeholder="Add Release Year"
        />
        <MWInputNumber
          label="Rating"
          type="number"
          name="rating"
          placeholder="Add Rating(1-9)"
          minValue={1}
          maxValue={9}
        />
        <MWSelect
          mappedData={categoryData}
          name="category"
          placeholder="Select Category"
        />
        <MWSelect
          mappedData={genreData}
          name="genre"
          mode="multiple"
          placeholder="Select Genres"
        />
        <Controller
          name="quality"
          rules={{ required: `Quality field is required` }}
          render={({ field }) => (
            <>
              <Select
                {...field}
                placeholder="select quality"
                className="w-full mt-3 text-semibold"
                defaultActiveFirstOption={true}
                options={[
                  { value: "high", label: "High" },
                  { value: "medium", label: "Medium" },
                  { value: "low", label: "Low" },
                ]}
              />
            </>
          )}
        />
        <MWSelect
          mappedData={LanguageData}
          name="language"
          mode="multiple"
          placeholder="Select Languages"
        />
        <MWSelect
          name="stars"
          mode="tags"
          placeholder="Press enter to add Stars Name"
        />
        <MWSelect
          name="tags"
          mode="tags"
          placeholder="Press enter to add tags"
        />
        <MWInput
          label="Movie Link"
          type="text"
          name="movieLink"
          placeholder="Add Movie Link"
        />
        <MWInput
          label="Trailer Link"
          type="text"
          name="trailerLink"
          placeholder="Add Trailer Link"
        />

        <MWUploadForm
          imageUrl={movieImage}
          setImageUrl={setMovieImage}
          isSuccess={isSuccess}
        />
        <Button htmlType="submit">Submit</Button>
      </MWForm>
    </>
  );
};

export default AddMovieForm;
