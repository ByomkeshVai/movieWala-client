import React from "react";
import { Button, Modal } from "antd";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";
import UpdateCategoryForm from "../../../components/form/UpdateCategoryForm";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedCategoryId: string | null;
}

const CategoryUpdateModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  selectedCategoryId,
}) => {
  const { data: data } = useGetCategoryQuery(selectedCategoryId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const singleCategory = Array.isArray(data) ? data[0] : data;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={null}
        title="Update Category Name"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <UpdateCategoryForm
          categoryID={singleCategory?._id}
          categoryItem={singleCategory?.category}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default CategoryUpdateModal;
