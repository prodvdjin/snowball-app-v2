import { ethers } from 'ethers'

const getPairDataPrefill = (
  prices,
  gauge,
  numAInPairBN,
  numBInPairBN,
  totalSupplyBN,
) => {
  const { token0 = {}, token1 = {} } = gauge;

  const numAInPair = parseFloat(
    ethers.utils.formatUnits(numAInPairBN, token0.decimals),
  );
  const numBInPair = parseFloat(
    ethers.utils.formatUnits(numBInPairBN, token1.decimals),
  );

  const priceA = prices[token0.symbol];
  const priceB = prices[token1.symbol];

  let totalValueOfPair;
  // In case price one token is not listed on coingecko
  if (priceA) {
    totalValueOfPair = 2 * priceA * numAInPair;
  } else {
    totalValueOfPair = 2 * priceB * numBInPair;
  }
  const totalSupply = parseFloat(ethers.utils.formatEther(totalSupplyBN)); // Uniswap LP tokens are always 18 decimals
  const pricePerToken = totalValueOfPair / totalSupply;

  return { totalValueOfPair, totalSupply, pricePerToken };
};

export default getPairDataPrefill