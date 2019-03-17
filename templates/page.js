module.exports = pageName => `
extends ../../layouts/default

block head
  - var pageTitle = projectName + ' | ${pageName}'

block content
  p Страница: ${pageName}
`;
