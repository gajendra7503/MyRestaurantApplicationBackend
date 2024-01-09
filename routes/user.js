var express=require('express');
var router =express.Router();


var cors = require('cors')
router.use(cors());

var jwt= require('jsonwebtoken')
var secretKey="secretkey"

var mainmiddleware=require('../middleware/token');

var maincontroller =require('../controller/user')

var mainsmiddleware=require("../middleware/multer");
var imagecontrollers=require('../controller/imagecontroller');

router.post('/',(req,res)=>{
    res.send('this is user routes');
})

router.post('/gettoken',mainmiddleware.JWtTOkenGenerate,(req,res)=>{
})

router.post('/profile',mainmiddleware.JWtverifyToken,(req,res)=>{

    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result:"invalid token"})
        }
        else{
            res.json({
                message:"profile acess",
                authData
            })
        }
    })

})

router.post('/register', maincontroller.Registration);










router.post('/upload',mainsmiddleware.uploadDocument,imagecontrollers.uploadimages);






module.exports = router; 