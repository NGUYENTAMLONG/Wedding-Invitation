export type TokenItemData = {
  image: string,
  name: string,
  quantity?: number,
  money?: number,
  percent?: number,
  address?: string,
};

export type Option = {
  label: string,
  value: string,
  disabled?: boolean,
};

export type Positions = {
  tokenA: string,
  tokenB: string,
  ratio: number,
  holding: number,
  total: number,
  lpPrice: number,
  apr: number,
  id: number,
  percentFee: number,
};

export type LiquidityToken = {
  name: string,
  symbol: string,
  policy: string,
};

export type LiquidityPool = {
  name: string,
  policy: string,
};

export type PoolData = {
  tokenA: LiquidityToken,
  tokenB: LiquidityToken,
  lp: LiquidityPool,
  tvl: number,
  tokenAAmount: number,
  tokenBAmount: number,
  volume24h: number,
  fee24h: number,
  totalLP: number,
};

export type Token = {
  symbol: string,
  name: string,
  metadata?: {
    image?: string,
    ticker?: string,
    name?: string,
  },
};

export type SwapDisplayProps = {
  tokenA?: Token,
  tokenB?: Token,
  lpFee?: string | number,
};

export type Transaction = {
  id: number,
  txType: 'LIQUIDITY' | string,
  type: 'add_liquidity' | 'remove_liquidity' | string,
  tokenA: {
    symbol: string,
  },
  tokenB: {
    symbol: string,
  },
  tokenAAmount: number,
  tokenBAmount: number,
  createdAt: string,
  status: 'pending' | 'completed' | 'failed' | string,
  walletAddress: string,
};

export enum TransactionStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export enum TransactionType {
  ADD_LIQUIDITY = 'addLiquidity',
  REMOVE_LIQUIDITY = 'removeLiquidity',
  BUY = 'buy',
  SELL = 'sell',
}
export enum ParentTransactionType {
  SWAP = 'swap',
  LIQUIDITY = 'liquidity',
}
