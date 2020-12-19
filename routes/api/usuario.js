const router = require('express').Router();
const models = require('../../models');
const MiController = require('../../controllers/usuarioController.js');
const bcrypt = require('bcryptjs');
const auth = require('../../middlewares/auth')


//.com/api/usuario/
// router.get('/', async(req, res) => {
//     const user = await models.user.findAll();
//     res.status(200).json(user);
// });


//.com/api/usuario/register
// router.post('/register', async(req, res) => {
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//     const user = await models.user.create(req.body);
//     res.status(200).json(user);
// });


//.com/api/usuario/listar
//.com/api/usuario/login
//.com/api/usuario/register
router.get('/listar', auth.verificarAdministrador, MiController.listar)
router.post('/login', MiController.login)
router.post('/register', MiController.register);
// router.put('/actualizar', MiController.actualizar)


module.exports = router;