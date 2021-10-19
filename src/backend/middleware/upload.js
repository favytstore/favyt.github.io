const util = require("util");
const multer = require("multer");
const {GridFsStorage} = require('multer-gridfs-storage');


const MONGODB_URI = process.env.DATABASE_URL;
console.log(MONGODB_URI);
var storage =  new GridFsStorage({
  url: MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-Favyt-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-Favyt-${file.originalname}`
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;