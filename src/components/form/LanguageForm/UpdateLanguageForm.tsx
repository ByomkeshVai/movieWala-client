import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUpdateLanguageMutation } from "../../../redux/api/languageAPI/languageAPI";

interface TFormInput {
  language: string;
}

interface TUpdateProps {
  languageID: string | undefined;
  languageItem: string | undefined;
  setIsModalOpen: (valueType: boolean) => void;
}

const UpdateLanguageForm: React.FC<TUpdateProps> = ({
  languageID,
  languageItem,
  setIsModalOpen,
}) => {
  const [updateCategory] = useUpdateLanguageMutation();

  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    updateCategory({
      languageID: languageID,
      body: { language: data.language },
    });

    setIsModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <label htmlFor="language" className="font-bold ">
        Language Name
      </label>
      <input
        placeholder="ex: Bangla, Hindi, Tamil"
        {...register("language")}
        defaultValue={languageItem}
        className="py-2 pr-5 p-2 rounded-xl shadow-md m-3 border-2 border-gray-400"
      />
      <div className="flex gap-4 ">
        <button
          className="px-3 py-1 border-2 rounded-xl bg-blue-800 text-slate-50 font-bold"
          type="submit"
        >
          Submit
        </button>
        <button
          className="px-3 py-1 border-2 rounded-xl bg-red-600 text-slate-50 font-bold"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateLanguageForm;
