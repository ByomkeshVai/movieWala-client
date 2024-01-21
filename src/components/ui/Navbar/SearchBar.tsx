import { Input } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <Search
      placeholder="Search Your Movie"
      allowClear
      size="large"
      onSearch={onSearch}
    />
  );
};

export default SearchBar;
