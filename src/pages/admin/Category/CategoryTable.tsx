import { Table } from "antd";
import { useGetCategoryQuery } from "../../../redux/api/categoryAPI/categoryAPI";
import Button from "../../../libs/Button";

const CategoryTable = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);

  const handleEditClick = (itemId: string) => {
    // Handle edit action
    console.log("Edit clicked for item with ID:", itemId);
  };

  const handleDeleteClick = (itemId: string) => {
    // Handle delete action
    console.log("Delete clicked for item with ID:", itemId);
  };

  const dataSource = data?.map((item, index) => ({
    key: (index + 1).toString(),
    category: item.category,
    date: item.createdAt.split("T")[0],
    action: (
      <div className="flex gap-2  items-center">
        <Button
          action={"Edit"}
          color={"blue"}
          onClick={() => handleEditClick(item._id)}
        />
        <Button
          action={"Delete"}
          color={"red"}
          onClick={() => handleDeleteClick(item._id)}
        />
      </div>
    ),
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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
  );
};

export default CategoryTable;
