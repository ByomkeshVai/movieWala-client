import MWAuthForm from "../../components/form/AuthenticationForm/MWAuthForm";
import MWAuthInput from "../../components/form/AuthenticationForm/MWAuthInput";
// import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import MWUploadForm from "../../components/form/FormFields/MWUploadForm";
import { useState } from "react";
import DefaultLogo from "/public/deafultlogo.png";

const Register = () => {
  //   const navigate = useNavigate();
  const [ProfileImage, setProfileImage] = useState("");
  const onSubmit = async (data: FieldValues) => {
    const modifiedData = {
      ...data,
      profileImageUrl: ProfileImage,
    };

    console.log(modifiedData);
  };
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="bg-[#252558] py-10 px-20 rounded-xl shadow-lg flex items-center justify-between space-x-10 ">
        <div className="flex-1">
          <img
            src={DefaultLogo}
            alt=""
            className="h-96 w-auto border-r-2 border-indigo-500"
          />
        </div>
        <div className="flex-1">
          <MWAuthForm onSubmit={onSubmit}>
            <MWAuthInput type="text" name="username" label="Username" />
            <MWAuthInput type="text" name="email" label="Email" />
            <MWAuthInput type="text" name="password" label="Password" />
            <MWUploadForm
              imageUrl={ProfileImage}
              setImageUrl={setProfileImage}
              // isSuccess={isSuccess}
            />
            <button
              type="submit"
              className="bg-cyan-600 text-slate-50 font-bold hover:text-gray-900 transition-colors py-2 rounded-xl shadow-md px-4"
            >
              Register
            </button>
          </MWAuthForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
