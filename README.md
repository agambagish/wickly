# 🏏 Wickly – Cricket Opinion Trading App

**Wickly** is a real-time cricket opinion trading platform where users can trade on the outcomes of cricket matches. It works like a prediction stock market — users buy shares based on their opinions (YES or NO), and earn profits if their predictions are correct.

> 📈 Predict outcomes. 🪙 Trade opinions. 💰 Earn on being right.

## 🚀 Features

- ✅ Trade YES/NO on live cricket predictions (e.g., "Will India win?")
- 💸 Real-time opinion trading with dynamic pricing
- 👥 User accounts with secure authentication
- 📊 Wallet system with deposits, trading history & payouts
- 🔐 Admin panel for managing markets and verifying results
- ⚡ Fast backend built with Drizzle ORM and PostgreSQL

## 🧱 Tech Stack

- **Frontend:** Next.js
- **Backend:** Hono
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Authentication:** Clerk
- **Payments:** Razorpay
- **Hosting:** Vercel

## 🧠 How It Works

1. **Markets are created** (e.g., "Will India win?")
2. **Users buy YES or NO shares** based on their opinion
3. **Prices shift dynamically** with demand (like a prediction market)
4. **Match ends**, result is resolved
5. **Correct predictions get payouts**, losers lose their stake

## 🛠️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/wickly.git
   cd wickly
   ```
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
4. **Run the app**
   ```bash
   pnpm dev
   ```

## 📸 Screenshots

Coming soon...

## 🤝 Contributing

PRs and feedback are welcome! Feel free to open an issue or submit a pull request.

## 🙌 Inspired By

- [Probo.in](https://probo.in)
- [Polymarket](https://polymarket.com)

> ⚡ Wickly — Where Cricket Meets Prediction.
