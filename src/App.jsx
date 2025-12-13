import { createBrowserRouter } from "react-router-dom";
import PortfolioLayout from "./pages/PortfolioLayout";
import ArtworkPreview from "./pages/ArtworkPreview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />,
  },
  {
    path: "/artwork/:id",
    element: <ArtworkPreview />,
  },
]);
