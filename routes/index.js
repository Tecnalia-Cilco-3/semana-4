const routerx = require('express-promise-router');
const categoriaRouter = require('./articulo');
const router = require('express').Router();
const apiRouterUser = require('./api/users.js');



router.use('/auth', apiRouterUser);

//const router = routerx();

//router.use('/articulo', articuloRouter);

module.exports = router;