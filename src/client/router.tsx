import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "@views/ErrorPage";
import HomePage from "@views/Homepage";
import Profile from "@views/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="users/:userId" element={<Profile />} />
    </Route>,
  ),
);

export default router;
