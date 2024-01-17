import AddLanguageForm from "../../../components/form/LanguageForm/AddLanguageForm";
import LanguageTable from "./LanguageTable";

const Language = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto  justify-center">
      <AddLanguageForm />
      <div className="w-full mx-auto flex justify-center"></div>
      <LanguageTable />
    </div>
  );
};

export default Language;
