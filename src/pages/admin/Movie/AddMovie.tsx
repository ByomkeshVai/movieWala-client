import { useForm, SubmitHandler } from "react-hook-form";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";
import { useGetGenreQuery } from "../../../redux/api/GenreAPI/genreAPI";
import { useGetLanguageQuery } from "../../../redux/api/languageAPI/languageAPI";
import { useState } from "react";

interface IFormInput {
  title: string;
  description: string;
  category: string;
  genres: string[];
  languages: string[];
}

const AddMovie = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const { data: categoryData, isLoading: categoryLoading } =
    useGetCategoryQuery(undefined);
  const { data: genreData, isLoading: genreLoading } =
    useGetGenreQuery(undefined);
  const { data: languageData, isLoading: languageLoading } =
    useGetLanguageQuery(undefined);

  const categoriesData = categoryData || [];
  const genresData = genreData || [];
  const languageDatas = languageData || [];

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const addGenre = (genre: string) => {
    setSelectedGenres((prevGenres) => [...prevGenres, genre]);
  };

  const removeGenre = (index: number) => {
    setSelectedGenres((prevGenres) => prevGenres.filter((_, i) => i !== index));
  };

  const addLanguage = (language: string) => {
    setSelectedLanguages((prevLanguages) => [...prevLanguages, language]);
  };

  const removeLanguage = (index: number) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.filter((_, i) => i !== index)
    );
  };

  const addTag = (tag: string) => {
    setTags((prevTags) => [...prevTags, tag]);
  };

  const removeTag = (index: number) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Update the 'genres', 'languages', and 'tags' fields to be arrays
    data.genres = selectedGenres;
    data.languages = selectedLanguages;
    data.tags = tags;
    console.log(data);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-3 "
      >
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold text-md mb-2">
            Title
          </label>
          <input
            className="px-3 py-2 font-lg rounded-lg shadow-xl"
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === "required" && (
            <p role="alert">Title is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-bold text-md mb-2">
            Description
          </label>
          <input
            className="px-3 py-2 font-lg rounded-lg shadow-xl"
            {...register("description", { required: true })}
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description?.type === "required" && (
            <p role="alert">Description is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="font-bold text-md mb-2">
            Category
          </label>
          <select
            className="font-semibold text-md py-2 bg-slate-300"
            {...register("category", { required: true })}
            aria-invalid={errors.category ? "true" : "false"}
          >
            <option value="">Select Category</option>
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
        <div className="flex flex-col gap-2">
          <label htmlFor="genres" className="font-bold text-md mb-2">
            Genres
          </label>

          <div className="flex flex-col">
            <select
              className="font-semibold text-md py-2 bg-slate-300"
              {...register("genres")}
              onChange={(e) => addGenre(e.target.value)}
            >
              <option value="">Select Genre</option>
              {genresData.map((genreObj, index) => (
                <option key={index} value={genreObj.genre}>
                  {genreObj.genre}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap items-center mt-2">
              {selectedGenres.map((selectedGenre, index) => (
                <div
                  key={index}
                  className="bg-purple-500 text-white rounded-full px-3 py-1 m-1 flex items-center"
                >
                  <span className="mr-2">{selectedGenre}</span>
                  <button
                    className="text-white"
                    type="button"
                    onClick={() => removeGenre(index)}
                  >
                    {/* Cross Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {errors.genres?.type === "required" && (
            <p role="alert">At least one genre is required</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="languages" className="font-bold text-md mb-2">
            Languages
          </label>

          <div className="flex flex-col">
            <select
              className="font-semibold text-md py-2 bg-slate-300"
              {...register("languages")}
              onChange={(e) => addLanguage(e.target.value)}
            >
              <option value="">Select Language</option>
              {languageDatas.map((languageObj, index) => (
                <option key={index} value={languageObj.language}>
                  {languageObj.language}
                </option>
              ))}
            </select>
            <div className="flex flex-wrap items-center mt-2">
              {selectedLanguages.map((selectedLanguage, index) => (
                <div
                  key={index}
                  className="bg-green-500 text-white rounded-full px-3 py-1 m-1 flex items-center"
                >
                  <span className="mr-2">{selectedLanguage}</span>
                  <button
                    type="button"
                    onClick={() => removeLanguage(index)}
                    className="text-white"
                  >
                    {/* Cross Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          {errors.languages?.type === "required" && (
            <p role="alert">At least one language is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="text-md font-semibold">
            Tags
          </label>
          <div className="flex flex-wrap items-center mt-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-full px-3 py-1 m-1 flex items-center"
              >
                <span className="mr-2">{tag}</span>
                <button
                  type="button"
                  className="text-white"
                  onClick={() => removeTag(index)}
                >
                  {/* Cross Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            {...register("tags")}
            placeholder="Add tags (press Enter to add)"
            className="mt-2 p-2 border rounded-lg"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTag(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
};

export default AddMovie;
