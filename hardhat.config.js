// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
// https://eth-goerli.g.alchemy.com/v2/OPRfTU2mtH03MoUVP-pOpjnjHGgO-gIi

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OPRfTU2mtH03MoUVP-pOpjnjHGgO-gIi',
      accounts: ['b97b2b435d6487b3be6a449894dcddb9e9fda69b2e4c9733ddeb689f3654278c']
    }
  }
}