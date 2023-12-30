export interface Coin {
    id: string,
    rank: number | null,
    symbol: string | null,
    name: string | null,
    supply: number | null,
    maxSupply: number | null,
    marketCapUsd: number | null,
    volumeUsd24Hr: number | null,
    priceUsd: number | null,
    changePercent24Hr: number | null,
    vwap24Hr: number | null
}