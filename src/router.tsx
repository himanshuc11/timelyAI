import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";

const router = createBrowserRouter([
  {
    path: "/create",
    element: <CreateCampaign />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
