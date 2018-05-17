var mongoose = require("mongoose"); 
var Catalogo= require("./catalogo.schema");

var  RecomendaciónSchema = new  mongoose.Schema(
    {
   
    fecha:{type:String,required:true},
     fase:{type:String,required:true},
     catalogo:[{}],
     recomendacion:{type:String,required:true}
  },
   {
    versionKey:false  
 }
);
module.exports = mongoose.model('Recomendacion',RecomendaciónSchema,'recomendacion');