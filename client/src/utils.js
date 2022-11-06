import Web3 from 'web3'
import Wallet from './contracts/Wallet.json'

const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
          if (window.ethereum) {
            const web3 =  new Web3(window.ethereum)

            try {
                await window.ethereum.enable()
                resolve(web3)
                
            } catch (error) {
              
                reject(error)
                window.alert(
                  "Non-Ethereum browser detected. You should consider trying MetaMask!"
                );
            }
          } else if(window.web3) {
            resolve(window.web3)
          } else {
            reject('Must install Metamask')
            window.alert(
              "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
          }
        })
    })
}

const getWallet = async (web3) => {
  const networkId = await web3.eth.net.getId();
  console.log(Wallet.networks);
  const deployedNetwork = Wallet.networks[networkId];

  return new web3.eth.Contract(Wallet.abi, deployedNetwork && deployedNetwork.address);
};

 const stringToHslColor = (text = "", s = 50, l = 80) => {
  const str = text.replace(" ", "");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
};

export { getWeb3, getWallet, stringToHslColor };