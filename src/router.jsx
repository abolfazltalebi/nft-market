import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Marketplace from "./pages/Marketplace";
import Rankings from "./pages/Rankings";
import NftPages from "./pages/NftPages";
import Layout from "./components/Layout/Layout";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";
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
