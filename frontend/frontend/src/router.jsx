import { createBrowserRouter } from "react-router-dom";
import Layout from "./views/Layout.jsx";
import PeopleList from "./views/PeopleList.jsx";
import ChamePage from "./views/ChamePage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <PeopleList /> },
      { path: "/people", element: <PeopleList /> },
      { path: "/chame", element: <ChamePage /> },
    ],
  },
]);
