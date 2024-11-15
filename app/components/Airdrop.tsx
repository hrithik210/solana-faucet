"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";


const Airdrop = () => {
  const [amount, setamount] = useState(Number);
  const wallet = useWallet();
  const { connection }  = useConnection();

  const sendAirDrop = async () => {
        if (!wallet.publicKey) {
            alert("Please connect your wallet first");
            return;
        }
        alert("Sending airdrop to " + wallet.publicKey.toBase58());
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        console.log(amount);
        alert("Airdrop sent!");
    
};
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-2">
      <input type="text" 
      placeholder="Amount" 
      className=" rounded-md py-5 text-center text-black mb-5" 
      value={amount}
      onChange={(e) => setamount(Number(e.target.value))}/>
      <button className="text-black shadow-md 
                    rounded-lg font-semibold bg-teal-400 px-5 py-3"
          onClick={sendAirDrop}
                  >
                    Send Airdrop
      </button>
    </div>
  )
}

export default Airdrop