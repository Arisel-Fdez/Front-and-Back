import { Router } from 'express';
import { success } from './response.js';
import { gethijo } from '../model/hijo.js';

const router = Router();


//Servidor get para checar si funciona

router.get('/padre/check', function (req, res) {
    res.send({
        success: "Servidor Check Success padre",
    })
})


// servidor get para mostrar user

router.get('/hijo/users', async function (reg,res){
gethijo.findAll({attributes:['username','email','password','phone_number']})
    .then(users => {
        res.send(users)
    })
    .catch(err =>{
        console.log(err)
    })
});


//Servidor post para agregar usuario

router.post('/hijo/add', async function (req, res) {
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;
    gethijo.create({username: username, email: email, password: password, phone_number: phone_number});

})


// servidor put para actualizar todos

router.put('/hijo/fullupdate', async function(req,res){

    let id= req.query.id;
    let newDatas=req.query;

    gethijo.findOne({where:{id:id}})
    .then((r) => {
      r.update(newDatas)
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
})

//Servidor patch cada columna

router.patch('/hijo/updateuser', async function(req,res){

    let id= req.query.id;
    let username= req.query.username;

    gethijo.findOne({where:{id:id}})
    .then((r) => {
      r.update({username:username})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});


router.patch('/hijo/updateemail', async function(req,res){

    let id= req.query.id;
    let email= req.query.email;

    gethijo.findOne({where:{id:id}})
    .then((r) => {
      r.update({email:email})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/hijo/updatepass', async function(req,res){

    let id= req.query.id;
    let password= req.query.password;

    gethijo.findOne({where:{id:id}})
    .then((r) => {
      r.update({password:password})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/hijo/updatephone', async function(req,res){

    let id= req.query.id;
    let phone_number= req.query.phone_number;

    gethijo.findOne({where:{id:id}})
    .then((r) => {
      r.update({phone_number:phone_number})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});




//Servidor delete para eliminar  columna

router.delete('/hijo/delete', async function (req, res) {
    await gethijo.destroy({
        where: {
            id: req.query.id
        }
    });
    console.log("Eliminado")
})


export default router;