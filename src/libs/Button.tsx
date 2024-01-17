import React from "react";

interface ButtonProps {
  action: string;
  color: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ action, color, onClick }) => {
  return (
    <div>
      <button
        className={`btn text-slate-50 border-1 border-${color}-500 px-4 bg-${color}-600 rounded-xl shadow-sm`}
        onClick={onClick}
      >
        {action}
      </button>
    </div>
  );
};

export default Button;
