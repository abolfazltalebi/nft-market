import Metamask from "/images/icons/Metamask.svg";
import walletConnect from "/images/icons/WalletConnect.svg";
import coinbase from "/images/icons/Coinbase.svg";
import { Link } from "react-router-dom";
export default function ConnectWalletItem() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl text-white font-bold">Connect wallet</h2>
      <p className="text-white/60">
        Choose a wallet you want to connect. There are several wallet providers.
      </p>
      <div className="flex flex-col gap-6">
        <Link to="/">
          <div className="flex items-center gap-3 border-2 border-action bg-secondary p-2 w-1/2 rounded-xl transition-all hover:-translate-y-1 cursor-pointer">
            <div>
              <img src={Metamask} alt="" />
            </div>
            <div>
              <p className="font-bold text-white">Metamask</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center gap-3 border-2 border-action bg-secondary p-2 w-1/2 rounded-xl transition-all hover:-translate-y-1 cursor-pointer">
            <div>
              <img src={walletConnect} alt="" />
            </div>
            <div>
              <p className="font-bold text-white">wallet Connect</p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="flex items-center gap-3 border-2 border-action bg-secondary p-2 w-1/2 rounded-xl transition-all hover:-translate-y-1 cursor-pointer">
            <div>
              <img src={coinbase} alt="" />
            </div>
            <div>
              <p className="font-bold text-white">Coinbase</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
