import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  createBrowserRouter,
  RouterProvider,
  createMemoryRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { UserHome } from "./components/UserHome";
import { Counter } from "./components/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <Navigate to="/main.aspx#!dev|module_sample_manager" replace />
        ),
      },
      {
        path: "/main.aspx",
        element: <UserHome />,
        exact: true,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);

const User = () => {
  return <RouterProvider router={router} />;
};

export default User;
