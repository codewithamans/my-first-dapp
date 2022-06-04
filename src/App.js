import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Web3 from "web3";

function App() {
  const [account, setAccount] = useState("0x00000000000");
  const [webapi, setwebapi] = useState({
    provider: null,
    web3: null,
  });
  // const connectToMetamask = async () => {
  //   const server = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   setAccount(server);
  //   console.log(server);
  //   console.log(window.web3);
  //   console.log(window.ethereum);
  // };
  const connectToMetamask = async () => {
    let provider = null;
    if (window.ethereum) {
      provider = window.ethereum;
      try {
        await provider.enable();
      } catch (error) {
        console.error("not connected : ", error);
      }
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else if (!process.env.production) {
      provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    }
    setwebapi({
      provider: provider,
      web3: new Web3(provider),
    });
  };
  useEffect(() => {
    connectToMetamask();
  }, []);

  useEffect(() => {
    const account = async () => {
      const getaccount = await webapi.web3.eth.getAccounts();
      setAccount(getaccount[0]);
      // const balance = await webapi.web3.eth.getBalance(String(account));
      // console.log(balance);
    };
    webapi.web3 && account();
  }, [webapi.web3]);

  return (
    <>
      <div>topa </div>
      <div className="mainfile">
        <div className="text">Funding</div>
        <div className="balance">Balance: 100ETH</div>
        <div className="acc">Account No. : {account} </div>
        <div>
          {/* <button className="btn" onClick={connectToMetamask}>
            Connect To MetaMask
          </button> */}
          <Button variant="outlined btn">Transfer</Button>
          <Button variant="outlined btn">Withdraw</Button>
        </div>
        <div className="footer">Created By AmanSingh</div>
      </div>
    </>
  );
}

export default App;
