const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000; // Choose your desired port

// Connect to MondoDB Atlas
const username = encodeURIComponent("public_user");
const password = encodeURIComponent("chriscentproductions_public");
const cluster = "chirscentportfolio.qj3tx5b.mongodb.net";
const collection = "store";

// MongoDB Atlas URL
let uri = `mongodb+srv://${username}:${password}@${cluster}/${collection}?retryWrites=true&w=majority`; // Replace with your MongoDB Atlas connection string

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// Allow CORS connection to localhost::dev & localshot::preview
const allowedOrigins = ['http://localhost:5173', 'http://localhost:4173'];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowed origins list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// Define a route to fetch products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});