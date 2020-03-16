module.exports = blockName => `
/* eslint-disable */
const $ = window.$;

export function ${blockName} () {
  console.log('${blockName} Works!');
}
/* eslint-enable */

`;
