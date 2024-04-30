const { getKeypairFromEnvironment } = require("@solana-developers/helpers");

require("dotenv/config")

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);