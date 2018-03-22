var express = require('express');
var router = express.Router();
const controller = require("../controllers/product.controller");

router.get('/', controller.getProducts);
//router.post('/', controller.postProduct);
router.patch('/:id', controller.patchProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;