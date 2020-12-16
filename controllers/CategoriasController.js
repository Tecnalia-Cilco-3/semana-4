//const User = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.login = async(req, res, next) =>{
    try{
        const user = await models.user.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password , user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    rol: user.rol
                }, 'config.secret', {
                    expiresIn:86400,
                });
                res.status(200).send({
                    auth:true,
                    accessToken: token,
                    user: user
                })
            }else{
                res.status(401).json({
                    error: 'Invalid Password!'
                })
            }
        } else {
            res.status(404).send({
                error: 'User Not Found'
            })
        }
              
    }    catch (error){
            res.status(500).send({
                message: 'Error ->'
            })
            next(error);
        }
    };
exports.register = async(req, res, next)=>{
        try{

        } catch (error) {
            
        }
    };

exports.listar = async(req, res, next)=>{
    try{

    } catch (error) {
            
        }
};
