import React from "react";
import styles from "../../themes/pageStyles/todoList.module.scss";
import PageHeader from "../../components/PageHeader/index.tsx";
import SubmitButton from "../../components/globalComponents/Button/index.tsx";
import { useNavigate } from "react-router-dom";
const ToDoList = () => {
  const navigate = useNavigate();
  console.log(styles, "THESE ARE STYLE");
  const handleRouting = (key) => {
    // e.preventDefault();
    console.log("Add to do item");
    navigate(`/${key}`);
  };
  return (
    <div className={styles?.wrapper}>
      <div className={styles["wrapper-list-wrapper"]}>
        <PageHeader title="ToDo-List" />
        <SubmitButton
          text="Create todo"
          onSubmit={handleRouting.bind(null, "create")}
        />
      </div>
    </div>
  );
};

export default ToDoList;
