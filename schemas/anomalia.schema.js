var mongoose = require('mongoose');
var AnomaliaSchema = new mongoose.Schema({
datos:{type:String,required:true},



},
{
  versionKey:false  
}
);
module.exports= mongoose.model('anomalia',AnomaliaSchema);
