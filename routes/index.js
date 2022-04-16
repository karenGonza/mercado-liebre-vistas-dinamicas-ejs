var express = require('express');
var router = express.Router();
let nombres = ["Carpaccio fresco", "Risotto de berenjena", "Mousse de arroz", "Espárragos blancos"]
let precioDetalle = ["Entrada Carpaccio de salmón con cítricos U$S 65.50", " Risotto de berenjena y queso de cabra U$S 47.00", "Mousse de arroz con leche y aroma de azahar U$S 27.50", "Espárragos blancos con vinagreta de verduras y jamón ibérico U$S37.50" ]

/* GET home page. */
router.get('/', function(req, res, next) {
  let menu ={
    name: nombres,
    precio: precioDetalle
  }
  res.render('index', {"menu" : menu});
});

module.exports = router;
