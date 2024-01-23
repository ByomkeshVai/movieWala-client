import { Layout, Menu } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router-dom";
import { adminPaths } from "../../../routes/AdminRoutes";
import { sidebarItemsGenerator } from "../../../utils/sidebarGenerator";
import { useAppSelector } from "../../../redux/hook";
import { getCurrentUser } from "../../../redux/features/auth/AuthSlice";

const { Header, Sider, Content } = Layout;

const userRole = {
  ADMIN: "admin",
  MODERATOR: "moderator",
  USER: "user",
};

const BackendLayout = () => {
  const user = useAppSelector(getCurrentUser);

  const navigate = useNavigate();

  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.MODERATOR:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.MODERATOR);
      break;
    default:
      navigate("/");
      break;
  }

  return (
    <Layout className="h-[100vh]">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",

            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>HU Bangladesh</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BackendLayout;
