import { FieldValues } from "react-hook-form";
import MWAuthInput from "../../../form/AuthenticationForm/MWAuthInput";
import MWAuthForm from "../../../form/AuthenticationForm/MWAuthForm";
import { useLoginMutation } from "../../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../../redux/hook";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { TUser, setUser } from "../../../../redux/features/auth/AuthSlice";
import { verifyToken } from "../../../../utils/VerifyToken";

const LoginPage = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastID = toast.loading("Logging In...");
    try {
      const userInfo = {
        username: data.username,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastID, duration: 2000 });
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      }
      navigate("/");
    } catch (error) {
      toast.error("Something Went Wrong", { id: toastID, duration: 2000 });
    }
  };
  return (
    <div className="lg:flex-1">
      <MWAuthForm onSubmit={onSubmit}>
        <MWAuthInput type="text" name="username" label="Username" />
        <MWAuthInput type="text" name="password" label="Password" />
        <button
          type="submit"
          className="bg-cyan-600 text-slate-50 font-bold hover:text-gray-900 transition-colors py-2 rounded-xl shadow-md px-4"
        >
          Login
        </button>
      </MWAuthForm>
      <div className="flex gap-2 mt-5 items-center">
        <h2 className="font-semibold text-md text-slate-50">
          Forget your password?
        </h2>
        <span className=" text-cyan-500 font-semibold">Reset Here</span>
      </div>
    </div>
  );
};

export default LoginPage;
