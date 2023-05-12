require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:  {
    georli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/jQfDv_X08ybrpoXG1F5fTTQeafT1MVw0',
      accounts:['9a47b012c305cb79153fbb70bad3546bf5e63383d9b383f87c05eda68573b5a7']
    }
  }
};
