import MWAuthForm from "../../components/form/AuthenticationForm/MWAuthForm";
import MWAuthInput from "../../components/form/AuthenticationForm/MWAuthInput";
// import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import MWUploadForm from "../../components/form/FormFields/MWUploadForm";
import { useState } from "react";
import DefaultLogo from "/public/deafultlogo.png";
import HeroBackground from "../../components/ui/Hero/HeroBackground";

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
    <>
      <div className="z-0 absolute">
        <HeroBackground height="h-full" />
      </div>
      <div className="h-screen flex items-center justify-center flex-wrap relative flex-col lg:flex-row">
        <div className="bg-[#252558] lg:py-10 pb-10 lg:px-20 px-10 rounded-xl shadow-lg flex items-center justify-between lg:space-x-10 flex-col lg:flex-row">
          <div className="lg:flex-1">
            <img
              src={DefaultLogo}
              alt=""
              className="lg:w-96 lg:h-auto h-80 lg:border-r-2 border-indigo-500"
            />
          </div>
          <div className="lg:flex-1">
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
            <div className="flex gap-2 mt-5 items-center">
              <h2 className="font-semibold text-md text-slate-50">
                Already have an account?
              </h2>
              <span className=" text-cyan-500 font-semibold">Login Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
