var express=require('express');
var app =express();
var db=require('./db')

var bodyParser = require('body-parser'); ////body-parser
app.use(bodyParser.json());

const cookieParser=require('cookie-parser');    //////cookie-parser
app.use(cookieParser());


const cors = require('cors')

app.use(cors());

app.use((req, res, next) => {res.header('Access-Control-Allow-Origin', '*');next();});


// global.__basedir = __dirname;

require('dotenv').config() //////dot  env


var main=require('./routes/user'); //////////routes

app.use('/user',main)


var mains=require('./routes/login')
app.use('/login',mains)


app.get('/home',(req,res)=>{
    res.send('welcomes');
})

/**
 * Get All Items
 *
 * @return response()
 */
app.get('/all-records',(req, res) => {
    let sqlQuery = "SELECT * FROM records";
   db.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.json({results});
    });
  });
      
  
  /**
   * Create New Item
   *
   * @return response()
   */
  app.post('/add-records',(req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var address = req.body.address;
    var services = req.body.services;
  
    var sql = `INSERT INTO records(name, email,mobile, address,services) 
    VALUES('${name}', '${email}', '${mobile}', '${address}', '${services}')`;
    db.query(sql, (err, result)=> {
        if(err){
          console.log(err);
        }
        res.json(result)
  });
  });
  /**
   * Update Item
   *
   * @return response()
   */
  app.put('/edit-records/:id',(req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var address = req.body.address;
    var services = req.body.services;
    var sql = `UPDATE records SET name="${name}", email="${email}",mobile="${mobile}", address="${address}",services="${services}"  WHERE id= '${id}'`;
    console.log(sql);
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.message);
        res.json(result);
    });
  });
  
  /**
   * Delete Item
   *
   * @return response()
   */
  app.delete('/delete-records/:id',(req, res) => {
    var id = req.params.id;
  var sql = `DELETE FROM records WHERE id= '${id}'`;
    console.log(sql);
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.message);
        res.json(result);
    });
  });
  
  /**
   * API Response
   *
   * @return response()
   */
  function apiResponse(results){
      return JSON.stringify({"status": 200, "error": null, "response": results});
  }
     

console.log(`Example app listening on port`,process.env.port);
app.listen(process.env.port,() => {
    setTimeout(() => console.log('timer',0));
  }); 