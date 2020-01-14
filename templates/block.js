module.exports = blockName => `
mixin ${blockName}()
  +b.${blockName}&attributes(attributes)
    block
    
mixin ui-kit-${blockName}()
  +ui-section
    +ui-section-head
      +ui-title Block ${blockName}
      +ui-path
        p Block: blocks/${blockName}/${blockName}
      +ui-description
        p Block description
  
    +ui-section-content()
      +${blockName}
      
    //- With +ui-section-content(true) container disappears
    //- Choose +ui-elements-list() for creating list of inline elements
    //- Border for special section: +ui-special()
`;
