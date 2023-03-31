## Derby frontend

1. npm install
2. Create .env.local with:

APP_DOMAIN=derby.finance
MORALIS_API_KEY=XXX
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=7197b3e8dbee5ea6274cab37245eec212
NEXT_PUBLIC_INFURA_ID=XXX

3. npm run dev

Next.js init and Moralis auth is mostly from:
https://docs.moralis.io/docs/sign-in-with-metamask

Example api at /api/contract/readContract, which uses the Moralis SDK. This will be used for all read functions:
https://docs.moralis.io/reference/runcontractfunction

There is an example sendTransaction and Deposit component which uses Wagmi. Wagmi will be used for all write functions.

Native transaction:
https://wagmi.sh/examples/send-transaction

Contract write:
https://wagmi.sh/examples/contract-write

Current setup is single chain on Goerli testnet

## Deployed Contracts Goerli

Vault:
0xE97C826aA3ffca41694D5b6e3eD6bE3638F0EEeA
You can interact with this contract via https://goerli.etherscan.io/ and connect your metamask


## StoryBook
npm run storybook