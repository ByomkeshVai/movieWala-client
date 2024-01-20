import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  label?: string;
  type: string;
  name: string;
};

const MWInput = ({ label, type, name }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label className="font-semibold text-md">{label}</label>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default MWInput;
