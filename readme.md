# 🎒 Bags.fm Open-Source SDK (Cashback & Trade Tools)

![Bags Banner](https://raw.githubusercontent.com/bagscashback/bagscashback/main/banner.png)

> A lightweight, developer-friendly TypeScript SDK to interact with the **Bags.fm** ecosystem on Solana. Build cashback bots, trading dashboards, and community rewards in minutes.

---

## ✨ Features
- **Plug & Play:** No complex setup, just import the `BagsClient`.
- **Cashback Logic:** Built-in functions to calculate rewards based on Bags.fm trading fees.
- **Type Safety:** Full TypeScript support for token data and user stats.
- **2026 Ready:** Updated for the latest Bags v2 API protocols.

---

## 🚀 Quick Start

### 1. Implementation
Simply import the client into your project:

```typescript
import { BagsClient } from './src/bagsClient';

// Initialize with your Bags Developer Key
const bags = new BagsClient('YOUR_API_KEY');

// 1. Get real-time trades for a token
const trades = await bags.getTokenTrades('TOKEN_MINT_ADDRESS');

// 2. Calculate a 1% cashback for a user
const reward = await bags.calculateCashback('USER_SOLANA_WALLET', 0.01);
console.log(`User is owed: ${reward} SOL`);