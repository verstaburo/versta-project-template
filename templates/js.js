module.exports = blockName => `
/* eslint-disable */
const $ = window.$;

export default function ${blockName} () {
  console.log('${blockName} Works!');
};
/* eslint-enable */

`;
