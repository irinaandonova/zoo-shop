const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/zooland")
        .then(() =>console.log('DB connected'))
        .catch(console.error)

app.listen(4000, console.log(`Application is running on http://localhost:4000`));