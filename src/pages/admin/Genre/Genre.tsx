import AddGenreForm from "../../../components/form/GenreForm/AddGenreForm";
import GenreTable from "./GenreTable";

const Genre = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto  justify-center">
      <AddGenreForm />
      <div className="w-full mx-auto flex justify-center"></div>
      <GenreTable />
    </div>
  );
};

export default Genre;
