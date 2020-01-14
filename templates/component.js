module.exports = blockName => `
mixin ${blockName}()
  +b.${blockName}&attributes(attributes)
    block
    
mixin ui-kit-${blockName}()
  +ui-section
    +ui-section-head
      +ui-title Component ${blockName}
      +ui-path
        p Component: components/${blockName}/${blockName}
      +ui-description
        p Component description
  
    +ui-section-content()
      +${blockName}
      
    //- With +ui-section-content(true) container disappears
    //- Choose +ui-elements-list() for creating list of inline elements
    //- Border for special section: +ui-special()
`;
