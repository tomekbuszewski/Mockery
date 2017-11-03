import express from 'express';
import fs from 'fs';

/*
App initialization
 */
const app = express();

const listFiles = path => {
  const files = fs.readdirSync(`./mocks/${path}`);
  const ret = [];

  for (const file of files) {
    ret.push(`<li><a href="api/${file}">${file}</a></li>`);
  };

  return `<ul>${ret.join('')}</ul>`;
};

const getFile = path => fs.readFileSync(`./mocks/${path}`, 'utf-8');

/*
Get methods
 */
app.get('/:path/:mock', (req, res) => {
  res.send(getFile(req.url));
});

app.get('/:path', (req, res) => {
  const content = listFiles(req.url);

  res.send(content);
});

app.listen(9000);