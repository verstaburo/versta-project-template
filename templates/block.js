module.exports = blockName => `
mixin ${blockName}()
  +b.${blockName}&attributes(attributes)
    block
    
mixin ui-kit-${blockName}()
  +ui-section
    +ui-section-head
      +ui-title Блок ${blockName}
      +ui-path
        p Блок: blocks/${blockName}/${blockName}
      +ui-description
        p Описание Блока
  
    +ui-section-content()
      +${blockName}
      
    //- При +ui-section-content(true) контейнер отсутствует
    //- Для перечисления инлайновых блоков используется миксин +ui-elements-list()
    //- Рамка вокруг особой секции: +ui-special()
`;
