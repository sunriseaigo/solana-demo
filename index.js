const { getKeypairFromEnvironment } = require("@solana-developers/helpers");
const { Connection, clusterApiUrl, PublicKey } = require("@solana/web3.js");

require("dotenv/config")

const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)

const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

connection.getBalance(address).then(balance => {
    console.log(`The balance of the account at ${address} is ${balance} lamports`)
    console.log(`✅ Finished!`)
})

