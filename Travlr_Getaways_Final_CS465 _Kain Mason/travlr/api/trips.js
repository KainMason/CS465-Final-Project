const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

router.get('/', async (req,res,next)=>{
  try{ const trips = await Trip.find({}, { _id:0, __v:0 }).sort({name:1}).lean(); res.json(trips); }
  catch(e){ next(e); }
});

router.get('/:slug', async (req,res,next)=>{
  try{
    const trip = await Trip.findOne({ slug: req.params.slug }, { _id:0, __v:0 }).lean();
    if(!trip) return res.status(404).json({error:'Not Found'});
    res.json(trip);
  }catch(e){ next(e); }
});

router.post('/', async (req,res,next)=>{
  try{
    const body = req.body || {};
    if(!body.slug || !body.name || !body.location) return res.status(400).json({error:'slug, name, location are required'});
    const created = await Trip.create(body);
    const plain = created.toObject(); delete plain._id; delete plain.__v;
    res.status(201).json(plain);
  }catch(e){
    if(e.code === 11000) return res.status(409).json({error:'Duplicate slug'});
    next(e);
  }
});

router.put('/:slug', async (req,res,next)=>{
  try{
    const updates = req.body || {};
    const updated = await Trip.findOneAndUpdate({ slug: req.params.slug }, updates, { new:true, runValidators:true }).lean();
    if(!updated) return res.status(404).json({error:'Not Found'});
    delete updated._id; delete updated.__v;
    res.json(updated);
  }catch(e){ next(e); }
});

router.delete('/:slug', async (req,res,next)=>{
  try{
    const deleted = await Trip.findOneAndDelete({ slug: req.params.slug }).lean();
    if(!deleted) return res.status(404).json({error:'Not Found'});
    res.status(204).end();
  }catch(e){ next(e); }
});

module.exports = router;
