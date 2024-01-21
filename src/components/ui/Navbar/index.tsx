import { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navbar mt-1">
      <Layout className="max-w-screen-2xl mx-auto">
        <Layout.Header className="nav-header flex items-center">
          <div className="logo">
            <h3 className="brand-font font-bold text-xl">MovieWala</h3>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu ">
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu flex items-center justify-between">
              <SearchBar />
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
