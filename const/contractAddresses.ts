/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Sepolia } from "@thirdweb-dev/chains";
export const NETWORK = Sepolia;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x4a7D689726641456582C8d182f0bF09A32Fab0d7";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x9bBa8d442397559e12a3806d70B6c55186be613B";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io/";
//TW_SECRET_KEY=IKQUCkAi9eqr31VNa_omu5P29HjXzgA2yG6Nk9-VN2EcKSDAsdjXiruJUlmBW5NlUXic72q4OIHhl9ty1hx1tg