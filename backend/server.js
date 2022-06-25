require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("frontend/build"));

  // const path = require("path");

  // app.get("*", (req, res) => {

  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  // })
}

app.listen(PORT, ()=> {
  console.log(`Server Running on ${PORT}`);
});