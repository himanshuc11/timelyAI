import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import EditCampaign from "./pages/EditCampaign";
import Details from "./pages/Details";
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
      {
        path: "/edit/:campaignId",
        element: <EditCampaign />,
      },
      {
        path: "/details/:campaignId",
        element: <Details />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
