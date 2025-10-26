const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';
async function connect(){
  mongoose.connection.on('connected',()=>console.log('[db] connected'));
  mongoose.connection.on('error',err=>console.error('[db] error',err));
  mongoose.connection.on('disconnected',()=>console.warn('[db] disconnected'));
  return mongoose.connect(MONGODB_URI,{ serverSelectionTimeoutMS: 10000 });
}
module.exports = { connect };
