module.exports = blockName => `
mixin ${blockName}()
  +b.${blockName}&attributes(attributes)
    block
`;
