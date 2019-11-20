<template lang="html">
    <div class="">
        <p>eth page</p>
    </div>
</template>

<script>
import { ethers } from 'ethers'
export default {

    mounted: function () {

        if(process.client){

            if (typeof window.ethereum !== 'undefined') {

                ethereum.enable()
               .then((accounts) => {
                   const provider1 = new ethers.providers.Web3Provider(web3.currentProvider);

           // There is only ever up to one account in MetaMask exposed
           const signer = provider1.getSigner();
           console.log(signer)
               })

            }
        }





      let provider = ethers.getDefaultProvider('ropsten');
      let randomWallet = ethers.Wallet.createRandom();
      console.log(randomWallet)

      let address = "0x4e669903a85fB3Da7D5eB6000F85E44bD967eA01";

      provider.getBalance(address).then((balance) => {

            // balance is a BigNumber (in wei); format is as a sting (in ether)
            let etherString = ethers.utils.formatEther(balance);

            console.log("Balance: " + etherString);
        });
        provider.getTransactionCount(address).then((transactionCount) => {
            console.log("Total Transactions Ever Sent: " + transactionCount);
        });



        let abi = [
    "constructor(string symbol,string name,uint8 dec,uint256 supply)",
    "function name() public view returns (string name)",
    "function symbol() public view returns (string symbol)",
    "function decimals() public view returns (uint8 dec)",
    "function totalSupply() public view returns (uint256 supply)"
];

// The bytecode from Solidity, compiling the above source
let bytecode = ""




// Load the wallet to deploy the contract with
let privateKey = '834660FF71673FB513C3954EBEB0B7B466DB8388F4D818CA6C2A77554801DBDF';
let wallet = new ethers.Wallet(privateKey, provider);

// Deployment is asynchronous, so we use an async IIFE
(async function() {

    // Create an instance of a Contract Factory
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);



    // Notice we pass in "Hello World" as the parameter to the constructor
    let contract = await factory.deploy('bnn','banla',4,30000);
    console.log(contract.interface.functions)
    // The address the Contract WILL have once mined
    // See: https://ropsten.etherscan.io/address/0x2bd9aaa2953f988153c8629926d22a6a5f69b14e
    console.log(contract.address);
    // "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E"

    // The transaction that was sent to the network to deploy the Contract
    // See: https://ropsten.etherscan.io/tx/0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51
    console.log(contract.deployTransaction);
    // "0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51"

    // The contract is NOT deployed yet; we must wait until it is mined
    await contract.deployed()




    // Done! The contract is deployed.
})();
}
}
</script>

<style lang="css" scoped >

</style>
