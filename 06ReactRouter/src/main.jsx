import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { Home, Github, AboutUs, ContactUs, User } from "./components";
import { githubLoader } from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="/github"
      loader={githubLoader}
       element={<Github />}
        />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
