import { createBrowserRouter } from "react-router-dom";
import AppShell from "../layout/AppShell.jsx";

import Home from "../../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <Home initialSection="about" /> },
      { path: "services", element: <Home initialSection="services" /> },
      { path: "skills", element: <Home initialSection="skills" /> },
      { path: "education", element: <Home initialSection="education" /> },
      { path: "experience", element: <Home initialSection="experience" /> },
      { path: "work", element: <Home initialSection="work" /> },
      { path: "contact", element: <Home initialSection="contact" /> },
    ],
  },
]);

export default router;