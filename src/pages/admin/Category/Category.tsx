import { Table } from "antd";
import AddCategoryForm from "../../../components/form/AddCategoryForm";

export type TOnSubmit = [category: string];

const Category = () => {
  const dataSource = [
    {
      key: "1",
      Category: "Dummy",
      AddedOn: "2015",
    },
    {
      key: "2",
      Category: "2",
      AddedOn: "2015",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div className="flex flex-col gap-10 w-full mx-auto  justify-center">
      <AddCategoryForm />
      <div className="w-full mx-auto flex justify-center"></div>
      <div>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
};

export default Category;
