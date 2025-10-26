// Simple seed utility: run with `node src/utils/seed.js`
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const Trip = require('../models/Trip'); // adjust if your model path differs

(async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/travlr';
    await mongoose.connect(mongoUrl);
    const trips = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../docs/trips.json'), 'utf8'));
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log(`Seeded ${trips.length} trips.`);
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();