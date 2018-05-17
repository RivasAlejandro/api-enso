var express = require('express'); 
var mongoose = require('mongoose'); 
var router= express.Router();
mongoose.connect('mongodb://localhost:27017/maiz'); 
var UsuarioAPI = require('./usuario.api'); 
var RecomendacionAPI =  require('./recomendacion.api');
var CatalogoAPI = require('./catalogo.api');
var enso = require('./anomalia.api');

router.get('/recomendacion/todas',RecomendacionAPI.todas);
router.post('/recomendacion/crear',RecomendacionAPI.crear);
  router.get('/catalogo/todos',CatalogoAPI.todos);
 router.post('/catalogo/crear',CatalogoAPI.crear);
 router.put('/catalogo/actualiza',CatalogoAPI.actualiza); 
  router.delete('/catalogo/borra/:id',CatalogoAPI.borra);

router.get('/usuario/findAll',UsuarioAPI.findAll); 
router.post('/usuario/login',UsuarioAPI.login);
router.get('/enso/',enso.anomalia);
router.get('/enso/todos',enso.getAnomalias);
module.exports  = router; 



