'use strict';

const express = require('express');
const PORT = process.env.PORT;
if (!PORT) throw new Error('Where your port at?');

const app = express();

//TODO add middleware here

app.listen(PORT, console.log(`running on port ${PORT}`));

app.get('/book', (req,res)=> res.send([
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "isbn": "ISBN_13 9780441013593",
    "image_url": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "description": "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
  }
]));