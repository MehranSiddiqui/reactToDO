import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/globalComponents/Button/index.tsx";
import CustomInput from "../../components/globalComponents/Input/index.tsx";
import React, { useState } from "react";
import todoStyles from "themes/pageStyles/todoList.module.scss";
const NewTodo = () => {
  const [formData, setFormData] = useState({
    todoName: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleFormChange = (e, key) => {
    const {
      target: { value },
    } = e;
    const dupeFormData = { ...formData };
    dupeFormData[key] = value;
    setFormData(dupeFormData);
  };
  const handleSubmit = (e) => {
    if (localStorage.getItem("formData")) {
      const oldFormData = JSON.parse(localStorage.getItem("formData"));
      const newFormData = [
        ...oldFormData,
        { ...formData, order: oldFormData?.length },
      ];
      localStorage.setItem("formData", JSON.stringify(newFormData));
    } else {
      localStorage.setItem(
        "formData",
        JSON.stringify([{ ...formData, order: 0 }])
      );
    }
    setFormData({ todoName: "", description: "" });
    navigate("/");
    e?.preventDefault();
  };
  return (
    <div className={todoStyles?.wrapper}>
      <form
        className={`${todoStyles["wrapper-list-wrapper"]} ${todoStyles["wrapper-component-wrapper"]}`}
      >
        <CustomInput
          type="text"
          placeholder="Todo Name"
          value={formData?.todoName}
          handleInput={(e) => handleFormChange(e, "todoName")}
        />
        <CustomInput
          type="text"
          placeholder="Todo Description"
          value={formData?.description}
          handleInput={(e) => handleFormChange(e, "description")}
          multiline
        />
        <SubmitButton text="Add todo" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default NewTodo;
