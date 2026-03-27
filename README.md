
https://stellar.expert/explorer/testnet/tx/2cb34c2e671053375409ebde84026f007e09c5af1e304a945374092dba02e0bb


<img width="1917" height="877" alt="image" src="https://github.com/user-attachments/assets/58221ca7-7a9c-49b7-ba16-78d86bc25465" />

# 🗳️ Stellar Polling App (Soroban Smart Contract)

## 📌 Project Description

This project is a decentralized polling application built on the Stellar blockchain using Soroban smart contracts. It allows users to create polls, vote on different options, and retrieve results securely from the blockchain.

---

## ⚙️ What It Does

* Users can create polls with multiple options
* Poll data is stored on-chain using Soroban smart contracts
* Users can vote on any poll option
* Results are fetched directly from the blockchain

---

## 🚀 Features

* Decentralized poll creation
* Voting system with option tracking
* On-chain data storage
* Result retrieval from smart contract
* React-based frontend
* Wallet connection support (Freighter)

---

## 🛠️ Tech Stack

* **Blockchain:** Stellar (Soroban)
* **Smart Contract:** Rust
* **Frontend:** React (Vite)
* **Wallet:** Freighter

---

## 📂 Project Structure

```
stellar-connect-wallet/
│
├── AnonymousFeedbackSmartContract/   # Smart contract (Rust)
├── src/                              # Frontend (React)
├── public/
├── package.json
```

---

## ⚡ Setup & Run

### 1. Build Smart Contract

```
cd AnonymousFeedbackSmartContract/contracts/hello-world
cargo build --target wasm32v1-none --release
```

---

### 2. Deploy Contract

```
stellar contract deploy --wasm target/wasm32v1-none/release/hello_world.wasm --source-account alice --network testnet --alias polling_app
```

---

### 3. Run Frontend

```
npm install
npm run dev
```

---

## 🧪 Example Commands

### Create Poll

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- create_poll --question "Best language?" --options-file-path options.json
```

---

### Vote

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- vote --poll_id 1 --option_index 0
```

---

### Get Results

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- get_results --poll_id 1
```

---

## 🎯 Future Improvements

* UI for creating and managing polls
* Live result visualization (charts/graphs)
* Multiple poll support
* Better wallet integration
* Improved UI/UX

---

## 👨‍💻 Author

Subhajit


