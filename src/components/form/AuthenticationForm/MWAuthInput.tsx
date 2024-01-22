import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const MWAuthInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }} className="flex flex-col">
      <label htmlFor={name} className="text-slate-50 font-bold mb-2">
        {label}
      </label>
      <Controller
        rules={{
          required: true,
        }}
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default MWAuthInput;
