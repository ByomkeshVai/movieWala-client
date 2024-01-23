import { FieldValues } from "react-hook-form";
import MWAuthInput from "../../../form/AuthenticationForm/MWAuthInput";
import MWUploadForm from "../../../form/FormFields/MWUploadForm";
import { useState } from "react";
import MWAuthForm from "../../../form/AuthenticationForm/MWAuthForm";
import { useRegisterMutation } from "../../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [ProfileImage, setProfileImage] = useState("");
  const [registerUser, { isSuccess }] = useRegisterMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      const modifiedData = {
        ...data,
        profileImageUrl: ProfileImage,
      };
      registerUser(modifiedData);
      toast.success("Registration Successful");
      navigate(`/`);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="lg:flex-1">
      <MWAuthForm onSubmit={onSubmit}>
        <MWAuthInput type="text" name="username" label="Username" />
        <MWAuthInput type="text" name="email" label="Email" />
        <MWAuthInput type="text" name="password" label="Password" />
        <MWUploadForm
          imageUrl={ProfileImage}
          setImageUrl={setProfileImage}
          isSuccess={isSuccess}
        />
        <button
          type="submit"
          className="bg-cyan-600 text-slate-50 font-bold hover:text-gray-900 transition-colors py-2 rounded-xl shadow-md px-4"
        >
          Register
        </button>
      </MWAuthForm>
      <div className="flex gap-2 mt-5 items-center">
        <h2 className="font-semibold text-md text-slate-50">
          Already have an account?
        </h2>
        <span className=" text-cyan-500 font-semibold">Login Now</span>
      </div>
    </div>
  );
};

export default RegisterPage;
