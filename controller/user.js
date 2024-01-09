var db=require('../db');
var jwt=require('jsonwebtoken');
var bcrypt = require('bcrypt')
var aes=require('../middleware/token');
var usermodel=require('../model/user')
var SMScontroller = require('../SMS');




function Registration (req,res){
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var token=req.body.token;
    var mobile=req.body.mobile;
    var constdetails=req.body
    var sql=`INSERT INTO users(name, email,password,token,mobile) VALUES ("${name}","${email}","${password}","${token}","${mobile}")`;
    db.query(sql, function (err, result){
        if (err) throw err;
        console.log("User data is inserted successfully ",constdetails.name);
    });

    SMScontroller.NewUserEmail(req.body.email);

    res.status(200).json({message:"User data is inserted successfully"})
    }



module.exports={
   

    // async getDataInsert(req,res){
    //      try{
    //         var name = req.body.name.trim();
    //         var mobile = req.body.mobile.trim();
    //         var email = req.body.email.trim();
    //         var password = req.body.password.trim();
    //         var confirmpassword=req.body.confirmpassword.trim();

    //         if(password!=confirmpassword){
    //             res.json({
    //                 status:false,
    //                 message:'password not match'
    //             })
    //         }else{
    //             var abc = await usermodel.getDataInsert(name, password, mobile, email, res);
    //             return abc;
    
    //         }
    //     }
    //     catch(err){
    //         return res.status(200).json({success:false,err:err});
    //     }     
    // },

Registration,
    
}



    