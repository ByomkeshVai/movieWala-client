import React from "react";
import { Button, Modal } from "antd";
import UpdateGenreForm from "../../../components/form/GenreForm/UpdateGenreForm";
import { useGetGenreQuery } from "../../../redux/api/GenreAPI/genreAPI";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedGenreId: string | null;
}

const GenreUpdateModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  selectedGenreId,
}) => {
  const { data: data } = useGetGenreQuery(selectedGenreId);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const singleGenre = Array.isArray(data) ? data[0] : data;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        footer={null}
        title="Update Genre Name"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <UpdateGenreForm
          genreID={singleGenre?._id}
          genreItem={singleGenre?.genre}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default GenreUpdateModal;
