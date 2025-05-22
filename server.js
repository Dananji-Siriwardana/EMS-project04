const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
mongoose.connect('mongodb://localhost:27017/EMS').then((db)=>{
  console.log("DB is connected");
}).catch((err)=>{
  console.log(err);
});



app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from EMS backend!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
