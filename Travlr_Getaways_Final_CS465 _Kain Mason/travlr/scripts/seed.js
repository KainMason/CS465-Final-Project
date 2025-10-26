require('dotenv').config();
const fs = require('fs'); const path = require('path'); const mongoose = require('mongoose');
const Trip = require('../models/trip');
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';
(async ()=>{
  try{
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','trips.json'),'utf-8'));
    await mongoose.connect(uri,{serverSelectionTimeoutMS:10000}); console.log('[seed] connected');
    for(const t of data){ await Trip.findOneAndUpdate({slug:t.slug}, t, {upsert:true, setDefaultsOnInsert:true}); console.log('[seed] upserted', t.slug); }
    await mongoose.disconnect(); console.log('[seed] done');
  }catch(e){ console.error('[seed] error', e); process.exit(1); }
})();
