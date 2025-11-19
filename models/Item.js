// backend/models/Item.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  buyLink: String
});
module.exports = mongoose.model('Item', ItemSchema);
