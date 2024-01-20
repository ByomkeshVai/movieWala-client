import { FieldValues } from "react-hook-form";
import MWForm from "../FormFields/MWForm";
import MWInput from "../FormFields/MWInput";
import { Button } from "antd";
import MWSelect from "../FormFields/MWSelect";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";
import { useGetGenreQuery } from "../../../redux/api/GenreAPI/genreAPI";
import { useGetLanguageQuery } from "../../../redux/api/languageAPI/languageAPI";

const AddMovieForm = () => {
  const { data: categoryData } = useGetCategoryQuery(undefined);
  const { data: genreData } = useGetGenreQuery(undefined);
  const { data: LanguageData } = useGetLanguageQuery(undefined);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <MWForm onSubmit={onSubmit}>
      <MWInput label="Title" type="text" name="title" />
      <MWInput label="description" type="text" name="description" />
      <MWSelect
        mappedData={categoryData}
        defaultValue="Select The Category"
        name="category"
      />
      <MWSelect
        mappedData={genreData}
        defaultValue="Select The Genre"
        name="genre"
        mode="tags"
      />
      <MWSelect
        mappedData={LanguageData}
        defaultValue="Select The Language"
        name="language"
        mode="tags"
      />
      <Button htmlType="submit">Submit</Button>
    </MWForm>
  );
};

export default AddMovieForm;
