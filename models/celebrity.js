// backend/models/Celebrity.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CelebritySchema = new Schema({
  name: { type: String, required: true },
  image: String,
  outfits: [{ type: Schema.Types.ObjectId, ref: 'Outfit' }]
});
module.exports = mongoose.model('Celebrity', CelebritySchema);
