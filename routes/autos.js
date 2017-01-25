var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/',function (req, res, next) {
	var marca = req.body.marca
	var modelo = req.body.modelo
	res.send("voy a crear un auto "+marca+" "+modelo);
})

router.get('/', function(req, res, next) {
  //leer parametro por get
  var fechaIni = req.query.fechaIni;
  res.send('devolver toda la coleccion de autos');
});

router.get('/:id',function (req, res, next) {
	var id = req.params.id;
	var respuesta = {}
	respuesta.id = id;
	respuesta.marca = "Hyundai"
	respuesta.modelo = "Matrix"
	res.send(respuesta);
})

router.put('/:id',function (req, res, next) {
	var id = req.params.id;
	//leer parametros por post
	var marca = req.body.marca;
	res.send('aqui voy a actualizar un auto con id:'+id);
})

router.delete('/:id',function (req, res, next) {
	var id = req.params.id;
	res.send('aqui voy a eliminar un auto con id:'+id);	
})



module.exports = router;
