import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '../build')));
//this renders a div with an empty li element, unsure where from
//but this caused errors in the console:
//a GET http://localhost:5000/data/songs.json not found (404), may have to send the file differently
//USING '../public' shows updated index.html WITHOUT rendering anything into the root element

app.use('/songs', songsRoutes);

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));



//Below is my attempt at server side rendering
//had issues importing ReactDOMServer from 'react-dom/server' and App
//also had issues with unexpected token '<' when rendering App component to string
//------------
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// import express from 'express';
// import fs from 'fs';
// import path from 'path';

// import React from 'react';
// var ReactDOMServer = require('react-dom/server');
// // var App = require('../src/App');
// import App from '../src/App.js';

// const app = express();
// const PORT = 5000;

// app.use('/', (req, res, next) => {
//   fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
//     if(err){
//       console.log(err);
//       return res.status(500).send("Error Occurred");
//     }
//     return res.send(data.replace(
//       '<div id="root"></div>',
//       `<div id="root">${ReactDOMServer.renderToString(App)}</div>`,
//     ))
//   })
// })

// app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));


