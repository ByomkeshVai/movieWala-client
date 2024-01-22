import { Table } from "antd";
import Swal from "sweetalert2";
import {
  useDeleteMovieMutation,
  useGetmovieQuery,
} from "../../../../redux/api/movieAPI/movieAPI";
import Button from "../../../../libs/Button";

const MovieTable = () => {
  const { data, isLoading } = useGetmovieQuery(undefined);
  const [deleteMovie] = useDeleteMovieMutation();

  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);

  //   const handleEditClick = (itemId: string) => {
  //     setSelectedMovieId(itemId);
  //     setIsModalOpen(true);
  //   };

  const handleViewClick = (itemId: string) => {
    console.log(itemId);
  };

  const handleDeleteClick = (itemId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(itemId);
        Swal.fire({
          title: "Deleted!",
          text: "Movie is deleted.",
          icon: "success",
        });
      }
    });
  };

  const dataSource = data?.map((item, index) => ({
    key: (index + 1).toString(),
    title: item.title,
    releaseYear: item.releaseYear,
    category: item.category,
    language: item.language,
    genre: item.genre,
    action: (
      <div className="flex gap-2  items-center">
        <Button
          action={"View"}
          color={"blue"}
          onClick={() => handleViewClick(item._id)}
        />
        {/* <Button
          action={"Edit"}
          color={"blue"}
          onClick={() => handleEditClick(item._id)}
        /> */}
        <Button
          action={"Delete"}
          color={"red"}
          onClick={() => handleDeleteClick(item._id)}
        />
      </div>
    ),
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Release Year",
      dataIndex: "releaseYear",
      key: "releaseYear",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Languages",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Genres",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div>
      <div className="w-full mx-auto ">
        {isLoading ? (
          "Loading"
        ) : (
          <Table dataSource={dataSource} columns={columns} />
        )}
        {/* <LanguageUpdateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedMovieId={selectedMovieId}
        /> */}
      </div>
    </div>
  );
};

export default MovieTable;
