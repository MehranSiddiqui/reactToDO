import React from "react";
import { GlobalSubmitButtonProps } from "../../../interfaces/Interface";
import buttonStyles from "../../../themes/componentStyles/button.module.scss";
const GlobalSubmitButton: React.FC<GlobalSubmitButtonProps> = (props) => {
  const { text, onSubmit } = props;
  return (
    <button
      type="submit"
      className={buttonStyles["button-primary"]}
      onClick={onSubmit}
    >
      <p className={buttonStyles["button-primary-text"]}>{text}</p>
    </button>
  );
};

export default GlobalSubmitButton;
