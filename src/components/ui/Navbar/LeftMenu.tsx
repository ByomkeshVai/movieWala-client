import { Menu } from "antd";
import { TMode } from "./NavTypes";

const LeftMenu = ({ mode }: TMode) => {
  const items = [
    { label: "Movies", key: "Movies" },
    { label: "Series", key: "Series" },
    { label: "Anime", key: "Anime" },
  ];
  return <Menu mode={mode} items={items} className="font-bold" />;
};

export default LeftMenu;
