const mongoose = require('mongoose');
const TripSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  duration: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, default: '' },
  summary: { type: String, default: '' },
  description: { type: String, default: '' },
  includes: { type: [String], default: [] },
  itinerary: { type: [String], default: [] }
}, { timestamps: true });
TripSchema.index({ slug: 1 }, { unique: true });
module.exports = mongoose.model('Trip', TripSchema);
