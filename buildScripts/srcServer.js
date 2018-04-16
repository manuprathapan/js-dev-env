import express from 'express';
import path from 'path'; //reference to path
import open from 'open'; //reference to open our site in browser

const port = 3000; //port that will be used
const app = express(); //creates an instance of express

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
