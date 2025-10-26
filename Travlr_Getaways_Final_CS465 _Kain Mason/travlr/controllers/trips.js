const Trip = require('../models/trip');
exports.list = async (req,res,next)=>{
  try{
    const trips = await Trip.find({}, { _id:0, __v:0, slug:1, name:1, location:1, duration:1, price:1, image:1, summary:1 }).sort({name:1}).lean();
    res.render('trips-list', { title:'Trips', navActive:'trips', trips });
  }catch(e){ next(e); }
};
exports.detail = async (req,res,next)=>{
  try{
    const trip = await Trip.findOne({ slug: req.params.slug }, { _id:0, __v:0 }).lean();
    if(!trip) return res.status(404).render('404',{title:'Trip Not Found'});
    res.render('trip-detail', { title: trip.name, navActive:'trips', trip });
  }catch(e){ next(e); }
};
