const Product = require("../models/Product");

exports.deleteProduct = (req,res,next)=>{
  Product.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}

exports.patchProduct = (req,res,next)=>{
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}

exports.getProducts = function(req, res, next) {
    Product.find()
    .populate("cards")
    .then(lists=>res.status(200).json(lists))
    .catch(e=>res.status(500).send(e));
  }

//   exports.postProduct = (req, res, next)=>{
//     const newProduct = new List({
//       title: req.body.title,
//       card: req.body.cards
//     });

//     newProduct.save()
//     .then(list=>res.status(201).json(list))
//     .catch(e=>res.status(500).send(e));

//   }