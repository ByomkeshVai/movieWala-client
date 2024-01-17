import { Table } from "antd";
import Button from "../../../libs/Button";
import Swal from "sweetalert2";
import { useState } from "react";
import LanguageUpdateModal from "./LanguageUpdateModal";
import {
  useDeleteLanguageMutation,
  useGetLanguageQuery,
} from "../../../redux/api/languageAPI/languageAPI";

const LanguageTable = () => {
  const { data, isLoading } = useGetLanguageQuery(undefined);
  const [deleteLanguage] = useDeleteLanguageMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedLanguageId, setSelectedLanguageId] = useState<string | null>(
    null
  );

  const handleEditClick = (itemId: string) => {
    setSelectedLanguageId(itemId);
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
        deleteLanguage(itemId);
        Swal.fire({
          title: "Deleted!",
          text: "Language is deleted.",
          icon: "success",
        });
      }
    });
  };

  const dataSource = data?.map((item, index) => ({
    key: (index + 1).toString(),
    language: item.language,
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
      title: "Language",
      dataIndex: "language",
      key: "language",
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
      <LanguageUpdateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedLanguageId={selectedLanguageId}
      />
    </div>
  );
};

export default LanguageTable;
