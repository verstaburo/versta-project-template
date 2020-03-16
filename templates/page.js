module.exports = pageName => `
extends ../../layouts/default

block head
  - var pageTitle = '${pageName}'

block content
  p Страница: ${pageName}
`;
