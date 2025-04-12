Figma: https://shorturl.at/IHpu4
Slides: https://drive.google.com/file/d/1XADFsU8X5yQdBPR_RJiw9K_RJz-utQWk/view?usp=sharing


### 
UMHackathon 2025 – Domain 2: Quantitative Trading  
Team Name: ByteForce  
Project: QuantAlpha  


🧠 Problem Statement  
Retail crypto traders lack the tools to extract actionable signals from complex market behavior.  
Our project aims to bridge this gap with a smart, ML-powered system that combines statistical market regime detection and NLP sentiment scoring.

🎯 Objective  
To build a strategy that utilizes:  
- Hidden Markov Models (HMM) to detect implicit market regimes (bullish, bearish, neutral)  
- On-chain data sources (simulated from CryptoQuant, Glassnode, Coinglass)  
- Sentiment analysis via NLP on crypto news  
- A trading signal generator optimized for alpha generation, backtested across multiple years

⚙️ Key Features  
- Model Engine: HMM-based regime detection + optional sentiment layer  
- Sentiment Analyzer: Classifies news as positive/neutral/negative  
- Backtesting: From Jan 2021 to Dec 2023 (BTC)  
- Trading Logic: Executes trades based on market state + sentiment; accounts for 0.06% trading fee  
- KPI Dashboard:  
  - Sharpe Ratio: 2.13  
  - Max Drawdown: -28%  
  - Trade Frequency: 4.2% per data row  

📐 Prototype (Figma/UI)  
- Clean dark-mode fintech interface  
- Strategy builder, signal viewer, sentiment tab, team page  
- Seamless screen transitions  
- Interactive UI mock-up: [Insert Figma Link]

🧪 Technologies Used  
- Python (yFinance, hmmlearn, pandas, matplotlib)  
- Figma (for UI/UX design)  
- NLP (TextBlob placeholder for sentiment)  
- Simulated on-chain feature data

