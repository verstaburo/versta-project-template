module.exports = blockName => `
.${blockName} {
  display: block;
  
  $b: &;
}
`;
