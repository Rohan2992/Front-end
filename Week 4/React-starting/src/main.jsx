import ReactDOM from "react-dom/client";
import ToDoListPost from "./ToDoListPost";
import ToDoListGet from "./ToDoListGet";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ToDoListPost />
  },
  {
    path: "/toDoList",
    element: <ToDoListGet />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
