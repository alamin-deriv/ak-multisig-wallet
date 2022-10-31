import React, {useEffect, useState} from 'react'
import {getWeb3, getWallet} from './utils'
import { Layout } from "flexibull-meme";
import { Theme } from "./config/theme";
import Header from './Header'
import NewTransfer from "./NewTransfer";
import TransferList from "./TransferList";


function App() {
   const [web3, setWeb3] = useState(undefined);
   const [accounts, setAccounts] = useState(undefined);
   const [wallet, setWallet] = useState(undefined);
   const [approvers, setApprovers] = useState(undefined);
   const [quorum, setQuorum] = useState(undefined);
   const [transfers, setTransfers] = useState(undefined);

   useEffect(() => {
    const init = async () => {
       const web3 = await getWeb3()
       const accounts = await web3.eth.getAccounts()
       const wallet = await getWallet(web3);

       const approvers = await wallet.methods.getApprovers().call();
       const quorum = await wallet.methods.quorum().call();
       const transfers = await wallet.methods.getTransfers().call();

       setWeb3(web3);
       setAccounts(accounts);
       setWallet(wallet);

       setApprovers(approvers);
       setQuorum(quorum);
       setTransfers(transfers);
    }
    init()
   }, [])

   const createTransfer = transfer => {
    wallet.methods.createTransfer(transfer.amount, transfer.to).send({from: accounts[0]});
   }

   const approveTransfer = transferId => {
    wallet.methods.approveTransfer(transferId).send({ from: accounts[0] });
   }


   if (
     typeof web3 === "undefined" ||
     typeof accounts === "undefined" ||
     typeof wallet === "undefined" ||
     typeof approvers === "undefined" ||
     typeof quorum === "undefined" ||
     typeof transfers === "undefined"
   ) {
     return <div>Loading...</div>;
   }


  return (
    <Layout theme={Theme}>
    <div style={{padding: '50px'}}>
    <h1>Multisig wallet</h1>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer} />
    </div>
      
    </Layout>
  );
}

export default App;
