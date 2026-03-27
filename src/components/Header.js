import React, { useState } from "react";
import { checkConnection, retrievePublicKey, getBalance } from "./Freighter";

const Header = () => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    try {
      const allowed = await checkConnection();

      if (!allowed) return alert("Permission denied");

      const key = await retrievePublicKey();
      const bal = await getBalance();

      setPublicKey(key);
      setBalance(Number(bal).toFixed(2));
      setConnected(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
  <div className="flex justify-between items-center p-4 bg-gray-200">
    <h1 className="text-xl font-bold">Stellar dApp</h1>

    <div className="flex items-center gap-3">
      {publicKey && (
        <>
          <div className="bg-white px-3 py-1 rounded shadow">
            {`${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`}
          </div>

          <div className="bg-white px-3 py-1 rounded shadow">
            Balance: {balance} XLM
          </div>
        </>
      )}

      <button
        onClick={connectWallet}
        disabled={connected}
        className={`px-4 py-2 rounded text-white ${
          connected ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  </div>
);
};

export default Header;