var mongoose = require("mongoose");
var Recomendacion = require("../schemas/recomendacion.schema");
var RecomendacionAPI = {

   
     todas: function(req,res){
         Recomendacion.find({},function(err,recomendaciones)
      {
     if(err){
    throw err; 

     }
      else {
     res.status(200).json(recomendaciones);
          }
       });
        },
        crear: function (req,res){
         console.log(req.body.catalogo);
var  NuevaRecomendacion= new Recomendacion({
    recomendacion: req.body.recomendacion, 
    fecha: req.body.fecha,
    catalogo:req.body.catalogo, 
    fase: req.body.fase
});
NuevaRecomendacion.save(function(err){
      if(err){
          throw err; 
      }
         else {
             res.status(200).json(NuevaRecomendacion);
            }
          });

        }



};
module.exports=RecomendacionAPI;