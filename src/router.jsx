import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout/Layout";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Rankings from "./pages/Rankings";
import NftPages from "./pages/NftPages";
import ConnectWallet from "./pages/ConnectWallet";
import CreateAccount from "./pages/CreateAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Marketplace", element: <Marketplace /> },
      { path: "Rankings", element: <Rankings /> },
      { path: "NftPage", element: <NftPages /> },
      { path: "ConnectWallet", element: <ConnectWallet /> },
      { path: "CreateAccount", element: <CreateAccount /> },
    ],
  },
]);

export default router;
