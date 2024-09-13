// import CreateToDo from "../pages/CreateTodo";
import NewTodo from "../pages/NewTodo";
import ToDoList from "../pages/TodoList";

const PageRoutes = [
  { path: "/", element: <ToDoList /> },
  { path: "/create", element: <NewTodo /> },
];
export default PageRoutes;
