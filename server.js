import express from 'express';
import { readFileSync, readdirSync} from 'fs';

/*
App initialization
 */
const app = express();

/*
Functions
 */

/**
 * Function for listing directories
 *
 * @param {string} path - path to be listed
 * @returns {string} - unordered list of paths
 */
const listDir = (path) => {
  const list = readdirSync(`./mocks/${path}`);
  const url = path => `${path}`.replace('//', '/'); // replacing double slash

  return `<h2>Available:</h2><ul>${list.map(item => `<li><a href="${url(`${path}/${item}`)}">${item}</a></li>`).join(' ')}</ul>`;
};

/**
 * Function for getting file contents
 * @param {string} path - path for file
 * @returns {string} file contents parsed as utf-8 string
 */
const getFile = path => readFileSync(`./mocks/${path}`, 'utf-8');

/*
Get methods
 */
app.get('**.ico', (req, res) => res.send('')); // Favicon

app.get('/', (req, res) => res.send(listDir('/'))); // Main dir

app.all('/:path/:mock', (req, res) => res.send(getFile(req.url))); // Given mock

app.get('/:path', (req, res) => res.send(listDir(req.url))); // Subdir

app.listen(9000);
console.log('Mockery is up and running at http://localhost:9000');