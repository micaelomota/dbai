import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);

const root = createRoot(document.body);
root.render(<RouterProvider router={router} />);
