import { Router } from 'express';
import { success } from './response.js';
import { getpadre} from '../model/padre.js'

const router = Router();


//Servidor get para checar si funciona

router.get('/padre/check', function (req, res) {
    res.send({
        success: "Servidor Check Success padre",
    })
})


// servidor get para mostrar user

router.get('/padre/users', async function (reg,res){
getpadre.findAll({attributes:['name','ap_paterno','ap_materno','edad', 'tblUsersdbId']})
    .then(users => {
        res.send(users)
    })
    .catch(err =>{
        console.log(err)
    })
});


//Servidor post para agregar usuario

router.post('/padre/add', async function (req, res) {
    let name = req.query.name;
    let ap_paterno= req.query.ap_paterno;
    let ap_materno = req.query.ap_materno;
    let edad = req.query.edad;
    let tblUsersdbId = req.query.tblUsersdbId;
    getpadre.create({name: name, ap_paterno: ap_paterno, ap_materno: ap_materno,edad: edad,tblUsersdbId:tblUsersdbId});

})


// servidor put para actualizar todos

router.put('/padre/fullupdate', async function(req,res){

    let id= req.query.id;
    let newDatas=req.query;

    getpadre.findOne({where:{id:id}})
    .then((r) => {
      r.update(newDatas)
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
})

//Servidor patch cada columna

router.patch('/padre/updateuser', async function(req,res){

    let id= req.query.id;
    let username= req.query.username;

    getpadre.findOne({where:{id:id}})
    .then((r) => {
      r.update({username:username})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});


router.patch('/padre/updateemail', async function(req,res){

    let id= req.query.id;
    let email= req.query.email;

    getpadre.findOne({where:{id:id}})
    .then((r) => {
      r.update({email:email})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/padre/updatepass', async function(req,res){

    let id= req.query.id;
    let password= req.query.password;

    getpadre.findOne({where:{id:id}})
    .then((r) => {
      r.update({password:password})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});

router.patch('/padre/updatephone', async function(req,res){

    let id= req.query.id;
    let phone_number= req.query.phone_number;

    getpadre.findOne({where:{id:id}})
    .then((r) => {
      r.update({phone_number:phone_number})
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 400);
    });
});




//Servidor delete para eliminar  columna

router.delete('/padre/delete', async function (req, res) {
    await getpadre.destroy({
        where: {
            id: req.query.id
        }
    });
    console.log("Eliminado")
})


export default router;