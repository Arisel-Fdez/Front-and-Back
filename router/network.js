import { Router } from 'express';
import { success } from './response.js';
import { getUser } from '../model/Users.js';

const router = Router();


//Servidor get para checar si funciona

router.get('/check', function (req, res) {
    res.send({
        success: "Servidor Check Success",
    })
})


// servidor get para mostrar user

router.get('/users', async function (reg,res){
getUser.findAll({attributes:['username','email','password','phone_number']})
    .then(users => {
        res.send(users)
    })
    .catch(err =>{
        console.log(err)
    })
});


//Servidor post para agregar usuario

router.post('/add', async function (req, res) {
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;
    getUser.create({username: username, email: email, password: password, phone_number: phone_number});

})


// servidor put para actualizar todos

router.put('/fullupdate', async function(req,res){

    let id= req.query.id;
    let newDatas=req.query;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update(newDatas)
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
})

//Servidor patch cada columna

router.patch('/updateuser', async function(req,res){

    let id= req.query.id;
    let username= req.query.username;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({username:username})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});


router.patch('/updateemail', async function(req,res){

    let id= req.query.id;
    let email= req.query.email;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({email:email})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/updatepass', async function(req,res){

    let id= req.query.id;
    let password= req.query.password;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({password:password})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/updatephone', async function(req,res){

    let id= req.query.id;
    let phone_number= req.query.phone_number;

    getUser.findOne({where:{id:id}})
    .then((r) => {
      r.update({phone_number:phone_number})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});




//Servidor delete para eliminar  columna

router.delete('/delete', async function (req, res) {
    await getUser.destroy({
        where: {
            id: req.query.id
        }
    });
    console.log("Eliminado")
})


export default router;