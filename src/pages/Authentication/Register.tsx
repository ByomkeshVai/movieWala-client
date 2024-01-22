import { Button } from "antd";
import MWAuthForm from "../../components/form/AuthenticationForm/MWAuthForm";
import MWAuthInput from "../../components/form/AuthenticationForm/MWAuthInput";
// import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import MWUploadForm from "../../components/form/FormFields/MWUploadForm";
import { useState } from "react";

const Register = () => {
  //   const navigate = useNavigate();
  const [ProfileImage, setProfileImage] = useState("");
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <MWAuthForm onSubmit={onSubmit}>
      <MWAuthInput type="text" name="username" label="username" />
      <MWAuthInput type="text" name="email" label="email" />
      <MWAuthInput type="text" name="password" label="password" />
      <MWUploadForm
        imageUrl={ProfileImage}
        setImageUrl={setProfileImage}
        // isSuccess={isSuccess}
      />
      <Button htmlType="submit">Login</Button>
    </MWAuthForm>
  );
};

export default Register;
