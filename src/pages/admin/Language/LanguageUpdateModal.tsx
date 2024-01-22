import React from "react";
import { Modal } from "antd";
import UpdateLanguageForm from "../../../components/form/LanguageForm/UpdateLanguageForm";
import { useGetLanguageQuery } from "../../../redux/api/languageAPI/languageAPI";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  selectedLanguageId: string | null;
}

const LanguageUpdateModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  selectedLanguageId,
}) => {
  const { data: data } = useGetLanguageQuery(selectedLanguageId);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const singleLanguage = Array.isArray(data) ? data[0] : data;

  return (
    <>
      <Modal
        footer={null}
        title="Update Language Name"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <UpdateLanguageForm
          languageID={singleLanguage?._id}
          languageItem={singleLanguage?.language}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default LanguageUpdateModal;
