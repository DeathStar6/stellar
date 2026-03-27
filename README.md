
https://stellar.expert/explorer/testnet/tx/2cb34c2e671053375409ebde84026f007e09c5af1e304a945374092dba02e0bb


<img width="1917" height="877" alt="image" src="https://github.com/user-attachments/assets/58221ca7-7a9c-49b7-ba16-78d86bc25465" />

# 🗳️ Decentralized Polling App (Soroban Smart Contract)

## 📌 Project Description

This project is a **decentralized polling (voting) application** built using **Soroban smart contracts on the Stellar network**.
It allows users to create polls, vote on options, and view results — all stored securely on-chain.

The goal of this project is to demonstrate how blockchain can enable **transparent, tamper-proof, and decentralized voting systems**.

---

## ⚙️ What It Does

* Users can create a poll with a question and multiple options
* Users can vote for a specific option
* Votes are stored on-chain using Soroban storage
* Anyone can retrieve poll results at any time
* Ensures transparency and immutability

---

## 🚀 Features

* 🧾 **Create Polls**
  Create polls with custom questions and multiple options

* 🗳️ **Vote System**
  Vote for any option in a poll

* 📊 **Real-time Results**
  Fetch results instantly from blockchain storage

* 🔐 **Decentralized Storage**
  All data is stored on-chain using Soroban

* ⚡ **Fast & Low Cost**
  Powered by Stellar’s efficient network

---

## 🏗️ Tech Stack

* **Blockchain:** Stellar (Soroban Smart Contracts)
* **Language:** Rust
* **CLI Tools:** Stellar CLI
* **Frontend (optional):** React + Freighter Wallet

---

## 📂 Project Structure

```
AnonymousFeedbackSmartContract/
│
├── contracts/
│   └── hello-world/
│       └── src/
│           └── lib.rs   # Smart contract logic
│
├── target/             # Build output (WASM)
├── Cargo.toml
├── README.md
```

---

## 🧠 Smart Contract Functions

### 1. Create Poll

Creates a new poll with a question and options.

```
create_poll(question: String, options: Vec<String>)
```

---

### 2. Vote

Vote for an option in a poll.

```
vote(poll_id: u64, option_index: u32)
```

---

### 3. Get Results

Fetch results of a poll.

```
get_results(poll_id: u64) -> Map<u32, u32>
```

---

## ⚡ How to Run

### 1. Build Contract

```
cargo build --target wasm32v1-none --release
```

---

### 2. Deploy Contract

```
stellar contract deploy --wasm target/wasm32v1-none/release/hello_world.wasm --source-account alice --network testnet --alias polling_app
```

---

### 3. Create Poll

(Using JSON file for options)

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- create_poll --question "Best language?" --options-file options.json
```

---

### 4. Vote

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- vote --poll_id 1 --option_index 0
```

---

### 5. Get Results

```
stellar contract invoke --id polling_app --source-account alice --network testnet -- get_results --poll_id 1
```

---

## 🧪 Example `options.json`

```
["Rust","JavaScript","Python"]
```

---

## 🌍 Future Improvements

* 🌐 Frontend UI with React + Freighter
* 🧑‍🤝‍🧑 User authentication
* 📊 Graphical result visualization
* ⏳ Poll expiration time
* 🔒 One vote per wallet

---

## 💡 Use Cases

* Online voting systems
* College elections
* Surveys & feedback collection
* DAO governance

---

## 👨‍💻 Author

**Subhajit**
Aspiring developer exploring Blockchain & AI 🚀

---

## 📜 License

This project is open-source and free to use for learning and development purposes.
