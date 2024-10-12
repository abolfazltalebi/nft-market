import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import NftPages from "./pages/Nft";
import Layout from "./components/Layout/Layout";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ConnectWallet from "./pages/ConnectWallet/ConnectWallet";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Ranking from "./pages/Ranking/Ranking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Marketplace", element: <MarketPlace /> },
      { path: "Rankings", element: <Ranking /> },
      {
        path: "/nft/:id",
        element: <NftPages />,
      },
      { path: "ConnectWallet", element: <ConnectWallet /> },
      { path: "CreateAccount", element: <CreateAccount /> },
    ],
  },
]);

export default router;
