import { Table } from "antd";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";

const CategoryTable = () => {
  const { data, isLoading, isError } = useGetCategoryQuery(undefined);

  const dataSource = data?.map((item, index) => ({
    key: (index + 1).toString(),
    category: item.category,
    date: item.createdAt.split("T")[0],
  }));

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
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
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CategoryTable;
