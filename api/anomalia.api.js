var mongoose = require('mongoose');
var Anomalia = require('../schemas/anomalia.schema');
var fs = require('fs');
var anomaly= require('./anomaly');
var info="";
var obj={};
var AnomaliaAPI={
anomalia:function(request,response){
    fs.readFile("anomalía.txt", function (err, data) {
        if (err) return
            info= data.toString();
            obj.enso=info;
          
    });
    setTimeout(function(){
        response.status(200).json(obj);
    }, 3000);
       

 
        
},
getAnomalias:function(req,response){
Anomalia.find({},function(error,anomalias){
    if(error){
        throw error;
    }else{
        response.status(200).json(anomalias);
    }
})
}



};
module.exports=AnomaliaAPI;
