const { ethers } = require("hardhat");

async function main() {
 console.log("Getting the Canberk token contract");
 const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
 const CanberkToken = await ethers.getContractAt("CanberkToken", contractAddress);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exitCode(1);
 });