import React from "react";
import { CustomInputProps } from "interfaces/Interface";
import InputStyles from "themes/componentStyles/input.module.scss";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { placeholder, value, type, handleInput } = props;
  return (
    <input
      className={`${InputStyles["input-wrapper"]}`}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={handleInput}
    />
  );
};

export default CustomInput;
