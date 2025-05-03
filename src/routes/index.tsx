import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import CoursesPage from "../pages/CoursesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<CoursesPage />} />
      </Route>
    </>
  )
);

export default router;
