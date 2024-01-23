import DefaultLogo from "/public/deafultlogo.png";
import HeroBackground from "../../components/ui/FrotendPage/Hero/HeroBackground";
import RegisterPage from "../../components/ui/FrotendPage/AuthUI/RegisterPage";

const Register = () => {
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
          <RegisterPage />
        </div>
      </div>
    </>
  );
};

export default Register;
