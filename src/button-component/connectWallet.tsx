import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <div className="button-container">
      <button type="button" onClick={() => open()}>
        Open Connect Modal
      </button>
      <button type="button" onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
    </div>
  );
}
