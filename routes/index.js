const routerx = require('express-promise-router');
const categoriaRouter = require('./categoria');



const router = routerx();

router.use('/articulo', articuloRouter);

module.exports = router;