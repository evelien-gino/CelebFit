// backend/models/Outfit.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OutfitSchema = new Schema({
  celebrityId: { type: Schema.Types.ObjectId, ref: 'Celebrity' },
  title: String,
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});
module.exports = mongoose.model('Outfit', OutfitSchema);
