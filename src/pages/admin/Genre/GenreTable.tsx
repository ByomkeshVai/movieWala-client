import { Table } from "antd";
import Button from "../../../libs/Button";
import Swal from "sweetalert2";
import { useState } from "react";
import GenreUpdateModal from "./GenreUpdateModal";
import {
  useDeleteGenreMutation,
  useGetGenreQuery,
} from "../../../redux/api/GenreAPI/genreAPI";

const GenreTable = () => {
  const { data, isLoading } = useGetGenreQuery(undefined);
  const [deleteGenre] = useDeleteGenreMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);

  const handleEditClick = (itemId: string) => {
    setSelectedGenreId(itemId);
    setIsModalOpen(true);
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
        deleteGenre(itemId);
        Swal.fire({
          title: "Deleted!",
          text: "Category is deleted.",
          icon: "success",
        });
      }
    });
  };

  const dataSource = data?.map((item, index) => ({
    key: (index + 1).toString(),
    genre: item.genre,
    date: item.createdAt.split("T")[0],
    action: (
      <div className="flex gap-2  items-center">
        <Button
          action={"Edit"}
          color={"blue"}
          onClick={() => handleEditClick(item._id)}
        />
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
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
      <GenreUpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
};

export default GenreTable;
