import { signTransaction, setAllowed, getAddress } from "@stellar/freighter-api";
import * as StellarSdk from "@stellar/stellar-sdk";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

const checkConnection = async () => {
  return await setAllowed();
};

const retrievePublicKey = async () => {
  const { address } = await getAddress();
  return address;
};

const getBalance = async () => {
  await setAllowed();

  const { address } = await getAddress();

  const account = await server.loadAccount(address);

  const balance = account.balances.find(
    (b) => b.asset_type === "native"
  );

  return balance.balance;
};

const userSignTransaction = async (xdr, network, signWith) => {
  const signed = await signTransaction(xdr, {
    network,
    accountToSign: signWith,
  });

  return signed;
};

export {
  checkConnection,
  retrievePublicKey,
  getBalance,
  userSignTransaction,
};