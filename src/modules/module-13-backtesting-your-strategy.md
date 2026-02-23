---
title: "Module 13: Backtesting Your Strategy"
order: 13
layout: module
tags:
  - module
slug: module-13-backtesting-your-strategy
---

Backtesting is the process of applying your trading strategy to **historical data** to evaluate how it would have performed in the past. It is a critical step before risking real capital.[^37][^38]

### Why Backtest?

- Validates whether your strategy has a statistical edge.[^37]
- Identifies strengths and weaknesses in your rules.
- Builds confidence in your system before going live.
- Establishes realistic expectations for win rate, drawdown, and profitability.[^39]

### Manual Backtesting (Chart Replay)

This is the most accessible method for beginners:

1. **Open your charting platform** (TradingView recommended) and use the "Replay" feature.
2. **Go to a historical date** on your chosen instrument.
3. **Play forward candle by candle**, applying your strategy rules exactly as you would in real time.[^8]
4. **Record every trade** in a spreadsheet: entry price, exit price, stop-loss, take-profit, result (win/loss), risk-to-reward achieved.
5. **Do NOT cherry-pick**—mark every setup that meets your rules, even if it results in a loss.

### What to Track During Backtesting

- **Total trades**: Aim for at least 50-100 trades minimum for statistical relevance.
- **Win rate**: Percentage of winning trades.
- **Average winner vs. average loser**: Your average winning trade should be significantly larger than your average losing trade.
- **Maximum drawdown**: The largest peak-to-trough decline.
- **Profit factor**: Gross profit / Gross loss. Above 1.5 is solid; above 2.0 is excellent.
- **Expectancy**: (Win% × Average Win) – (Loss% × Average Loss). Must be positive.[^38][^37]

### Backtesting Pitfalls to Avoid

- **Curve fitting**: Over-optimizing your rules to perfectly fit historical data. This won't work in live trading.[^38]
- **Survivorship bias**: Only testing on assets that "survived" (e.g., only testing on stocks that still exist, ignoring delisted ones).[^38]
- **Look-ahead bias**: Using information that wouldn't have been available at the time of the trade.
- **Insufficient sample size**: Testing on 10-20 trades proves nothing. You need at least 50-100+.
- **Single market condition**: Test across trending, ranging, and volatile conditions.[^37]

### Paper Trading (Forward Testing)

After successful backtesting, transition to **paper trading** (demo trading):
- Trade your strategy in real-time with simulated money.
- This tests your ability to execute under live market conditions (speed, emotion, decision-making).
- Paper trade for **at least 1-3 months** before going live.[^40][^8]
- Track results the same way as backtesting.

***
