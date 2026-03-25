import axios, { AxiosInstance } from 'axios';

export class BagsClient {
  private client: AxiosInstance;
  private readonly baseUrl: string = 'https://public-api-v2.bags.fm/v1';

  constructor(apiKey: string) {
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Fetch real-time trade data for a specific Solana token
   */
  async getTokenTrades(tokenMint: string) {
    const response = await this.client.get(`/trades/${tokenMint}`);
    return response.data;
  }

  /**
   * Calculate cashback for a specific wallet address based on volume
   */
  async calculateCashback(walletAddress: string, rate: number = 0.01) {
    // Logic to fetch user volume and multiply by rate
    const volume = await this.getUserTradingVolume(walletAddress);
    return volume * rate;
  }

  private async getUserTradingVolume(wallet: string): Promise<number> {
    // Internal API call to Bags fee-share endpoint
    const res = await this.client.get(`/users/${wallet}/stats`);
    return res.data.total_volume || 0;
  }
}