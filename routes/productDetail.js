var express = require('express');
var router = express.Router();
let nombres = [, "", "", ""]
let precioDetalle = [, " ", "", "" ]
let product = [
    {
        name:"Carpaccio fresco",
        value:"Entrada Carpaccio de salmón con cítricos U$S 65.50",
        id:"0"
    },{
        name:"Risotto de berenjena",
        value:"Risotto de berenjena y queso de cabra U$S 47.00",
        id:"1"
    },{
        name:"Mousse de arroz",
        value:"Mousse de arroz con leche y aroma de azahar U$S 27.50",
        id:"2" 
    },{
        name:"Espárragos blancos",
        value:"Espárragos blancos con vinagreta de verduras y jamón ibérico U$S37.50",
        id:"3"
    }
]

/* GET productDetail page. */

router.get('/:id', function(req, res, next) {
  res.render('productDetail', controller.product)
});

module.exports = router;


/* for (let i = 0; i < product.length; i++) {
      if (id === product.id[i]) {
          return product[i]
      }else{
          return "Este producto no existe"
      } */