'use strict';

const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
if (!PORT) throw new Error('Where your port at?');

const app = express();

app.use(cors());
//TODO add middleware here

app.listen(PORT, console.log(`running on port ${PORT}`));

app.get('/api/v1/books', (req,res)=> res.send([
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "isbn": "ISBN_13 9780441013593",
    "image_url": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "description": "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
  }
]));

app.get('/api/v1/books/:id',(req,res) => {
  
  let currentBook= books.find(book=> book.id ===parseInt(req.params.id));
  if(currentBook){
    res.send(currentBook);
  }
  else{
    res.sendStatus(404);
  }
});

