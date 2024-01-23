import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { TMode } from "./NavTypes";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import {
  getCurrentUser,
  logout,
} from "../../../../redux/features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
// import { useSingleUserQuery } from "../../../../redux/features/auth/authApi";

const RightMenu = ({ mode }: TMode) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getCurrentUser);

  // console.log(user?.username);

  // const { data } = useSingleUserQuery(user?.username);

  // console.log(data);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">
              {user?.username ? user.username : ""}
            </span>
          </>
        }
      >
        {user?.role ? (
          <>
            <Menu.Item>
              <CodeOutlined /> Request Movie
            </Menu.Item>
            <Menu.Item>
              <UserOutlined /> {user.username}
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              <LogoutOutlined /> Logout
            </Menu.Item>
          </>
        ) : user?.role == "admin" ? (
          <>
            <Menu.Item onClick={() => navigate("/admin/dashboard")}>
              <CodeOutlined /> Dashboard
            </Menu.Item>
            <Menu.Item>
              <UserOutlined /> {user.username}
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              <LogoutOutlined /> Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item onClick={() => navigate("/login")}>
              <CodeOutlined /> Login
            </Menu.Item>
            <Menu.Item onClick={() => navigate("/register")}>
              <CodeOutlined /> Register
            </Menu.Item>
          </>
        )}
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
