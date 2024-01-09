var db=require('../db')
var usermodel=require('../model/user');

module.exports={



//   async uploadimages(req,res){
//     try{
//       console.log("uploadimages controller: " + req.file);
//           var abc = await usermodel.uploadimages(title,path,type);
//           return abc;
//        }
//    catch(err){
//        return res.status(200).json({success:false,err:err});
//    }     
// },






async uploadimages(req, res) {

  var title=req.file.title;
  var path=req.file.path;
  var type=req.file.type;


  if (!req.file) {
      console.log("No file upload");
  } else {
      console.log(req.file.filename)
      // var insertData = "INSERT INTO uploadfile(file_src)VALUES(?)"
      var sql=`INSERT INTO uploadfile(title, path, type) VALUES ("${title}","${path}","${type}")`;
      db.query(sql, [path], (err, result) => {
          if (err) throw err
          console.log("file uploaded")
      })
  }
}





}