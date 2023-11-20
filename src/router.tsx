import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <CreateCampaign />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
