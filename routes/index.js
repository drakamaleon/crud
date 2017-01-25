var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function (req, res, next) {
	if(req.body.usuario =="admin"&&req.body.password =="1234"){
		req.session.userID = 567
		req.session.admin = true;
		res.send("sesion creada");
		return;//se debe hacer el return para que no continue
	}
	res.send("usuario no valido")
});
module.exports = router;
