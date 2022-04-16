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


let controller = {
    product: (req, res) =>{
    let parametro = req.params.id
    let productoEncontrado = product.find(product => product.id == parametro)//El metodo This recorre un array y devuelve el valor que coincida con el valor introducido
    if(productoEncontrado){
        return productoEncontrado//devuelve el auto con la patente que coincida con la busqueda
    }else {
        return console.log("No se encontró el producto")//si ninguna patente coincide devuelve null
    }
 }
}

module.exports = controller;