/* eslint-disable  */
import { Select } from "antd";
import extractValueWithMap from "./extractValueWithMap";
import { Controller, useFormContext } from "react-hook-form";

type MWSelectProps = {
  name: string;
  mappedData?: any;
  mode?: "multiple" | "tags" | undefined;
  placeholder?: string;
};

const MWSelect = ({ mappedData, name, mode, placeholder }: MWSelectProps) => {
  const { formState } = useFormContext();
  const extract = extractValueWithMap(mappedData, name, name);

  return (
    <>
      <Controller
        name={name}
        rules={{ required: `${name} field is required` }}
        render={({ field }) => (
          <>
            <Select
              placeholder={placeholder}
              className="w-full mt-3 text-semibold"
              {...field}
              mode={mode}
              defaultActiveFirstOption={true}
              options={extract}
            />
            {formState.errors[name] && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {formState?.errors[name]?.message as string}
              </div>
            )}
          </>
        )}
      />
    </>
  );
};

export default MWSelect;
