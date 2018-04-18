import express from 'express';
import path from 'path'; //reference to path
import open from 'open'; //reference to open our site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000; //port that will be used
const app = express(); //creates an instance of express
const compiler = webpack(config); //Reference to webpack compiler

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
