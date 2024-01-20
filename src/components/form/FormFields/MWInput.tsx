import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
};

const MWInput = ({ label, type, name, placeholder }: TInputProps) => {
  const { formState } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <label className="font-semibold text-md">{label}</label>
      <Controller
        name={name}
        rules={{ required: `${name} field is required` }}
        render={({ field }) => (
          <>
            <Input {...field} type={type} id={name} placeholder={placeholder} />
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

export default MWInput;
