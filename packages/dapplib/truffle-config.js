require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan reflect sad promote imitate problem slot gate'; 
let testAccounts = [
"0x80b37de88f3d38c26e5c51ff420ec390a758bbdf505d62d6a8f7d09eb3380008",
"0xd7d68d8d2b759fe04c7e4666e780cfe23f7eab13404e373ecf761a0c8b1dee21",
"0x08cdaef36e6d403a1e785a1f812466405822aa30a7466d75e183ab2e2cf0c82d",
"0x5e8489f6efa8aee9b95772f7ab4335027eb729539474fb6733ac90d22c68f609",
"0x36b3954d05c10d6837beba8aeafd0a285dbc2ac7fdd5a60006198f05ae7bdb23",
"0xe9dd6d384c6af0ac5e1321f7c0b33442bfb4bdf5db9036d797c6ec1d8d15b462",
"0xbd205c09c5aa2315788bae4f4fda2221d87b18641803ae9fa0a9089e9962eeab",
"0xe83bdda601cea03731a849b1acdbd3a7a7334ee789ba5dceeccf2729e0debad8",
"0x930bcf90ae807ded2c6119a3589ef7c334e7207bfe71631e96b24d0f09ab4ea0",
"0xdd1f6905f05475b48ff85267b0cefbda8d00e6de8aadbc15fd92089687f42e7d"
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
            version: '^0.8.0'
        }
    }
};

