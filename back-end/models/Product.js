const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema({  
    
    title: {type: String},
    desc: {type: String},
    price:{type:Number},
    countStock:{type:Number},
    category:{
      type:Array,
      default:[]
    },
    image: {
      type: Array,
      default:[]},
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;