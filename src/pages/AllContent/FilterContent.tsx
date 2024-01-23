/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Button, Dropdown, Menu } from "antd";

type TItem = {
  key: string;
  label: string;
};

type DropdownFilterProps = {
  data: any;
  categoryKey: string;
  filterName: string;
  onFilterSelect: (item: TItem) => void;
};

const FilterContent = ({
  data,
  categoryKey,
  filterName,
  onFilterSelect,
}: DropdownFilterProps) => {
  const [items, setItems] = useState<TItem[]>([]);

  useEffect(() => {
    const itemsSet = new Set<string>();

    const filteredItems =
      data
        ?.flatMap((item: { [x: string]: any }) => item[categoryKey] ?? [])
        .filter(
          (category: string) =>
            category && !itemsSet.has(category) && itemsSet.add(category)
        )
        .map((category: any) => ({ key: category, label: category })) ?? [];

    setItems(filteredItems);
  }, [data, categoryKey]);

  const handleMenuClick = (item: TItem) => {
    onFilterSelect(item);
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <h2 onClick={() => handleMenuClick(item)}>{item.label}</h2>
            </Menu.Item>
          ))}
        </Menu>
      }
      placement="bottomLeft"
      arrow={{ pointAtCenter: true }}
    >
      <Button>{`Filter by ${filterName}`}</Button>
    </Dropdown>
  );
};

export default FilterContent;
