import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
