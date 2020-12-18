const routerx = require('express-promise-router');
// const apiCategoriaRouter = require('./articulo');
const router = require('express').Router();
const apiUsuarioRouter = require('./api/users.js');


//.com/api/usuario
router.use('/usuario', apiUsuarioRouter);

//.com/api/categoria
// router.use('/categoria', apiCategoriRouter)

//const router = routerx();

//.com/api/auth/articulo
// router.use('/articulo', apiArticuloRouter);

module.exports = router;