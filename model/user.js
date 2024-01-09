var db=require('../db')


module.exports={

    async getDataInsert(name, password, mobile, email, res){
        
        return db.query(`CALL sp_save_user("${name}","${password}", "${mobile}", "${email}",  "")`, function (err, result) {
            if (err) throw err;
            return res.json({
                success:true, 
                data:result
            });
        });
    },



    

// async uploadimages(req, res) {

//     var title=req.file.title;
//     var path=req.file.path;
//     var type=req.file.type;
  
  
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         // var insertData = "INSERT INTO uploadfile(file_src)VALUES(?)"
//         var sql=`INSERT INTO uploadfile(title, path, type) VALUES ("${title}","${path}","${type}")`;
//         db.query(sql, [path], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
//   }

}