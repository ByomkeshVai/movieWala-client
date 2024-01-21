import { Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Navbar from "../../ui/Navbar";

const FrontendLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
    </div>
  );
};

export default FrontendLayout;
