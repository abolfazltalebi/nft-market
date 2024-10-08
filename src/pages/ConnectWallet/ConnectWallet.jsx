import ConnectWalletImage from "./ConnectWalletImage";
import ConnectWalletItem from "./ConnectWalletItem";

export default function ConnectWallet() {
  return (
    <main className="mb-8">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <ConnectWalletImage />
        <ConnectWalletItem />
      </section>
    </main>
  );
}
