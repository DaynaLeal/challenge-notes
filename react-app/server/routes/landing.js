import express from 'express';
import path from 'path';

const router = express.Router();

var __dirname = path.resolve();
// //to go back a directory
var rootDirectory = path.join(__dirname, "..");

router.get('/', (req, res) => {
  res.sendFile('/public/index.html', { root: rootDirectory });
  // res.send(console.log(rootDirectory + '/public/index.html'))
})

export default router;