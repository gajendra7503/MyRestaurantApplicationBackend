var jwt= require('jsonwebtoken')
var CryptoJS = require("crypto-js");
const HASHKEY = "abcd23@!%$";
var secretKey="secretkey"


function JWtTOkenGenerate(req,res,next){
    // check credential from db if right or wrong password 
    // if matched then get details like id, username

    // verifieduser = db.query(` CALL getUserDetails(req.useremail)`)

    // if(userdetailFromDB.pasword = req.passsword ){

    // }
    // else{
    //     res.send({
    //         result: 'Wrong user credentinal'
    //     })
    // }

    const user = {
        id: 1, // get from db
        username: "sachin",
        email: "abc@test.com",
      }
    
      jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
    
        res.json({
          token
        })
    
      })
      next()

  }





function JWtverifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    console.log(decoded);
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    if (decoded.username == 'sachin' && decoded.email !== "abc@gmail.com")
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    req.userId = decoded.userId;
    next();
  });
}



function encryptData(valueToEncrypt){
  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(valueToEncrypt), HASHKEY).toString();
  return ciphertext;
  }
  function decryptData(valueToDecrypt){       
      // Decrypt             
      var bytes= CryptoJS.AES.decrypt(valueToDecrypt, HASHKEY);
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
  }

  module.exports={
    JWtTOkenGenerate,
    JWtverifyToken,
    encryptData,
    decryptData
  }