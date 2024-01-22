import { InputNumber } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  maxValue?: number;
  minValue?: number;
};

const MWInputNumber = ({
  label,
  type,
  name,
  placeholder,
  maxValue,
  minValue,
}: TInputProps) => {
  const { formState } = useFormContext();
  return (
    <div>
      <label className="font-semibold text-md mt-2">{label}</label>
      <Controller
        name={name}
        rules={{ required: `${name} field is required` }}
        render={({ field }) => (
          <>
            <InputNumber
              min={minValue}
              max={maxValue}
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              className="w-full "
            />
            {formState.errors[name] && (
              <div style={{ color: "red", marginTop: "5px" }}>
                {formState?.errors[name]?.message as string}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default MWInputNumber;
