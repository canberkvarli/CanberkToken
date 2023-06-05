// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const CanberkToken = await ethers.getContractFactory('CanberkToken');

  // Deploy the contract
  console.log('Deploying CanberkToken...');
  const canberkToken = await CanberkToken.deploy();
  await canberkToken.deployed();
  console.log(`CanberkToken deployed to: ${canberkToken.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });