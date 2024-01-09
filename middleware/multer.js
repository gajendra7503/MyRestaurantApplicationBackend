
const path = require("path");

var multer = require("multer");


module.exports={
  uploadDocument: async (req, res,next) => {
    const storage = multer.diskStorage({
      destination: './resources/static/assets/uploads',
      filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      }
    });
    const upload = multer({ storage: storage, limits: { fileSize:  100 * 1024 * 1024 } }).single("file");

    upload(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.json({
          "success": false,
          "message": err.message
        })
      }
      next();
    });
  }
}