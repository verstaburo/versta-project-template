module.exports = pageName => `
extends ../../layouts/default

block head
  - var pageTitle = 'Versta Project Template'

block content
  +b.${pageName}
`;
