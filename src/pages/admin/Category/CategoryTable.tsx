import { Table } from "antd";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../redux/api/categoryAPI/categoryAPI";
import Button from "../../../libs/Button";
import Swal from "sweetalert2";
import { useState } from "react";
import CategoryUpdateModal from "./CategoryUpdateModal";

const CategoryTable = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (itemId: string) => {
    setIsModalOpen(true);
    console.log("Edit clicked for item with ID:", itemId);
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
        deleteCategory(itemId);
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
    category: item.category,
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
      title: "Category",
      dataIndex: "category",
      key: "category",
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
      <CategoryUpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default CategoryTable;
