'use strict';

const express = require('express');
const PORT = process.env.PORT;
if (!PORT) throw new Error('Where your port at?');

const app = express();

//TODO add middleware here

app.listen(PORT, console.log(`running on port ${PORT}`));

app.get('/test', (req,res)=> res.send('Hello World'));