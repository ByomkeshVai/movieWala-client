import AddMovieForm from "../../../components/form/MovieForm/AddMovieForm";

const AddMovie = () => {
  // const { data: categoryData, isLoading: categoryLoading } =
  //   useGetCategoryQuery(undefined);
  // const { data: genreData, isLoading: genreLoading } =
  //   useGetGenreQuery(undefined);
  // const { data: languageData, isLoading: languageLoading } =
  //   useGetLanguageQuery(undefined);

  return (
    <div className="max-w-screen-lg mx-auto ">
      <AddMovieForm />
    </div>
  );
};

export default AddMovie;
