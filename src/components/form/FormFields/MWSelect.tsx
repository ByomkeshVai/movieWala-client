/* eslint-disable  */
import { Select } from "antd";
import extractValueWithMap from "./extraValueWithMap";
import { Controller } from "react-hook-form";

type MWSelectProps = {
  defaultValue: string;
  name: string;
  mappedData: any;
};

const MWSelect = ({ defaultValue, mappedData, name }: MWSelectProps) => {
  const extract = extractValueWithMap(mappedData);

  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Select {...field} defaultValue={defaultValue} options={extract} />
        )}
      />
    </>
  );
};

export default MWSelect;
