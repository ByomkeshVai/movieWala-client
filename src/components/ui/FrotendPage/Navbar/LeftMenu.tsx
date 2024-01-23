import { Menu } from "antd";
import { TMode } from "./NavTypes";
import { navbarItemsGenerator } from "../../../../utils/navbarGenerator";
import { userPaths } from "../../../../routes/UserRoutes";

const LeftMenu = ({ mode }: TMode) => {
  const items = navbarItemsGenerator(userPaths);
  return <Menu mode={mode} items={items} className="font-bold" />;
};

export default LeftMenu;
