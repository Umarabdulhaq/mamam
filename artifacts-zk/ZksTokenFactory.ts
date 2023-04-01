import { ethers, utils } from "ethers";
import { Wallet } from "zksync";
import { Deployer, LinkToken__factory, ZkSync__factory } from "@matterlabs/hardhat-zksync-deploy";

const ZKSYNC_CONTRACT_NAME = "ZkSync";
const LINK_TOKEN_CONTRACT_NAME = "LinkToken";
const LINK_DECIMALS = 18;
const INITIAL_LINK_SUPPLY = utils.parseUnits("10000", LINK_DECIMALS);

async function main() {
  const privateKey = "<your-private-key>"; // Replace with your actual private key.
  const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL);
  const wallet = new Wallet(privateKey, provider);

  const deployer = new Deployer(hre, wallet);
  const zksyncArtifact = await deployer.loadArtifact(ZKSYNC_CONTRACT_NAME);
  const linkTokenArtifact = await deployer.loadArtifact(LINK_TOKEN_CONTRACT_NAME);

  // Estimate deployment fees
  const deploymentFee = await deployer.estimateDeployFee(zksyncArtifact);
  const linkDeploymentFee = await deployer.estimateDeployFee(linkTokenArtifact);

  console.log(`Deploying ${ZKSYNC_CONTRACT_NAME} and ${LINK_TOKEN_CONTRACT_NAME} contracts with the account: ${wallet.address}`);
  console.log(`The deployment fee for ${ZKSYNC_CONTRACT_NAME} is ${utils.formatEther(deploymentFee.toString())} ETH`);
  console.log(`The deployment fee for ${LINK_TOKEN_CONTRACT_NAME} is ${utils.formatEther(linkDeploymentFee.toString())} ETH`);

  // Deposit ETH to L1
  const ethAmount = deploymentFee.mul(2);
  const ethDeposit = await wallet.depositToSync({
    depositTo: wallet.address(),
    token: "ETH",
    amount: ethAmount,
  });

  // Wait for Ethereum transaction and L2 deposit to complete
  await ethDeposit.awaitReceipt();
  console.log(`Successfully deposited ${utils.formatEther(ethAmount.toString())} ETH to L2 for ${ZKSYNC_CONTRACT_NAME} deployment`);

  // Deploy ZkSync
  const zksyncFactory = new ZkSync__factory(wallet);
  const zksyncContract = await zksyncFactory.deploy({ gasPrice: 0, gasLimit: 0 });
  console.log(`${ZKSYNC_CONTRACT_NAME} contract deployed at address: ${zksyncContract.address}`);

  // Deploy LinkToken
  const linkTokenFactory = new LinkToken__factory(wallet);
  const linkTokenContract = await linkTokenFactory.deploy(INITIAL_LINK_SUPPLY);
  console.log(`${LINK_TOKEN_CONTRACT_NAME} contract deployed at address: ${linkTokenContract.address}`);

  // Approve LinkToken contract to spend the necessary amount of LINK tokens
  const approveTx = await linkTokenContract.approve(zksyncContract.address, INITIAL_LINK_SUPPLY);
  await approveTx.wait();

  console.log(`Successfully approved ${LINK_TOKEN_CONTRACT_NAME} contract to spend ${utils.formatUnits(INITIAL_LINK_SUPPLY.toString(), LINK_DECIMALS)} LINK tokens`);

  console.log(`Deployment of ${ZKSYNC_CONTRACT_NAME} and ${LINK_TOKEN_CONTRACT_NAME} contracts completed successfully!`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });