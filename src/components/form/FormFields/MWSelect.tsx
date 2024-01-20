/* eslint-disable  */
import { Select } from "antd";
import extractValueWithMap from "./extractValueWithMap";
import { Controller, useFormContext } from "react-hook-form";

type MWSelectProps = {
  defaultValue: string;
  name: string;
  mappedData: any;
  mode?: "multiple" | "tags" | undefined;
};

const MWSelect = ({ defaultValue, mappedData, name, mode }: MWSelectProps) => {
  const { formState } = useFormContext();
  const extract = extractValueWithMap(mappedData, name, name);

  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <>
            <Select
              className="w-full mt-3 text-semibold"
              {...field}
              mode={mode}
              defaultValue={defaultValue}
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
