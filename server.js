// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/celebfitsample';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error', err));

// Simple route
app.get('/', (req, res) => res.send('CelebFit API up'));

// import routes (we'll create them)
const celebRoutes = require('./routes/celebrities');
app.use('/api/celebrities', celebRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
