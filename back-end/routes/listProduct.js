var express = require('express');
var router = express.Router();
var Product = require ('../models/Product.js');

 var multer  = require('multer');
 var upload = multer({ dest: './public/uploads/' });


/* GET home page. */
router.get('/all', function(req, res, next) {
  Product.find()
      .then(product => res.json(product))
});


// 
router.post('/new',upload.single("file") , function(req, res, next) {
 //console.log("entro aqui!!")
 console.log(req.file)
  const product = new Product({
      title:req.body.title,
      desc:req.body.desc,
      price:req.body.price,
      countStock:req.body.countStock,
      category:req.body.category,
      image: `/uploads/${req.file.filename}`
  })
  product.save()
      .then(productCreated => res.json(productCreated))
})

router.get('/:id', function(req, res, next) {
  Product.findById(req.params.id)
      .then(singleProduct => res.json(singleProduct))
})

module.exports = router;
