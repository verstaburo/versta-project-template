const program = require('commander');
const fs = require('fs');
const path = require('path');

const sources = {
  block: 'mixin {name}()\n  +b.{name}&attributes(attributes)\n    block\n',
  component: 'mixin {name}()\n  +b.{name}&attributes(attributes)\n    block\n',
  page: "extends ../../layouts/default\n\nblock head\n- var pageTitle = 'Versta Project Template'\n\nblock content\n  +b.{name}",
  scss: '.{name} {\n  display: block;\n}\n',
  js: "import $ from 'jquery';\n\nexport default function {name}() {\n\n}\n",
};

const dirPath = {
  block: path.resolve('app/blocks'),
  page: path.resolve('app/pages'),
  component: path.resolve('app/components'),
};

const validateName = (name, kind) => (
  new Promise((resolve, reject) => {
    const isValid = /^(\d|\w|-)+$/.test(name);

    if (isValid) {
      resolve(isValid);
    } else {
      const errMsg = (
        `ERR>>> An incorrect ${kind} name '${name}'\n` +
        `ERR>>> A block name must include letters, numbers & the minus symbol.`
      );
      reject(errMsg);
    }
  })
);

const directoryExist = (blockPath, name, kind) => (
  new Promise((resolve, reject) => {
    fs.stat(blockPath, (notExist) => {
      if (notExist) {
        resolve();
      } else {
        console.log(blockPath);
        reject(`ERR>>> The ${kind} '${name}' already exists.`);
      }
    });
  })
);

const createDir = blockPath => (
  new Promise((resolve, reject) => {
    fs.mkdir(blockPath, (err) => {
      if (err) {
        reject(`ERR>>> Failed to create a folder '${dirPath}'`);
      } else {
        resolve();
      }
    });
  })
);

const generateFileSources = (name, kind, js) => {
  const data = {};
  data.pug = sources[kind].replace(/{name}/g, name);
  data.scss = sources.scss.replace(/{name}/g, name);

  if (js) {
    data.js = sources.js.replace(/{name}/g, name);
  }

  return Promise.resolve(data);
};

const createFiles = (blockPath, name, files) => (
  Object.keys(files).map((ext) => {
    const filePath = path.join(blockPath, `${name}.${ext}`);
    const fileSource = files[ext];

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, fileSource, 'utf8', (err) => {
        if (err) {
          reject(`ERR>>> Failed to create a file '${filePath}'`);
        } else {
          resolve();
        }
      });
    });
  })
);

const getFiles = blockPath => (
  new Promise((resolve, reject) => {
    fs.readdir(blockPath, (err, files) => {
      if (err) {
        reject(`ERR>>> Failed to get a file list from a folder '${blockPath}'`);
      } else {
        resolve(files);
      }
    });
  })
);

const make = (name, kind, js) => {
  const blockPath = path.join(dirPath[kind], name);

  return validateName(name, kind)
    .then(() => directoryExist(blockPath, name, kind))
    .then(() => createDir(blockPath))
    .then(() => generateFileSources(name, kind, js))
    .then(files => createFiles(blockPath, name, files))
    .then(() => getFiles(blockPath))
    .then((files) => {
      const line = '-'.repeat(48 + name.length);
      console.log(line);
      console.log(`The block has just been created in 'app/${kind}s/${name}'`);
      console.log(line);

      // Displays a list of files created
      files.forEach(file => console.log(file));
    });
};

const printError = err => console.log(err);

program
  .command('block [blockNames...]')
  .option('--js', 'Generate script file')
  .action((blockNames, opts) => {
    if (blockNames === undefined) {
      return console.log('Please enter blockName');
    }

    const promises = blockNames.map(name => make(name, 'block', opts.js));
    Promise.all(promises).catch(printError);
});

program
  .command('component [componentNames...]')
  .option('--js', 'Generate script file')
  .action((componentNames, opts) => {
    if (componentNames === undefined) {
      return console.log('Please enter componentName');
    }

    const promises = componentNames.map(name => make(name, 'component', opts.js));
    Promise.all(promises).catch(printError);
});

program
  .command('page [pageNames...]')
  .option('--js', 'Generate script file')
  .action((pageNames, opts) => {
    if (pageNames === undefined) {
      return console.log('Please enter pageName');
    }

    const promises = pageNames.map(name => make(name, 'page', opts.js));
    Promise.all(promises).catch(printError);
});

program.parse(process.argv);
