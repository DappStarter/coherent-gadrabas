require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remain umbrella good narrow flat senior'; 
let testAccounts = [
"0x7bd4e66862dffa684022e88252ca665bc46570d477ef6c51a49d3c1d811d3f19",
"0xe3306da181a2921544f72a030492dff49738f490656a13d8157e3b95c76f77ae",
"0xef943c9056660a01e3a960445b7fb33e55de76f7884ab98d57556db712ae4086",
"0xfd3706e337ce9ef72f9a7909ab2da69fc08631473d3c2978d11bcd1db8a5e144",
"0x849dc7bd423bd6219afcbc0e2afa58e814135033c1da29348f6aeb52bd0d8276",
"0x15df9c0057e393cf906c932b1d7deb38207eefc923912ef7cfb2f2aeb877a45d",
"0x756e34099b4ef1df4f6dc5b46217390a053b1aac63774b13fbd08f9c328d9b2a",
"0x3b1903d4cde7c47bed6e7138c111e8f010355a7c7b1039af5e68ccb26caf1dbe",
"0xf200f9e1cf2479848a82358a788a3b0835dd6eb16a6c199ae2e6877a688f89d1",
"0x91bce32833c5f609c1c717939e3e3cc56b99a0ebb854fbd47655acc3616d9aa2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
