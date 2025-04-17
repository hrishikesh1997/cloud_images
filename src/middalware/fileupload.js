const multer =require("multer")
const path =require ("path")
const FileTypeValidator = require("../utils/FileTypeValidator.js")
const {UNEXPECTED_FILE_TYPE} =require("../constants/file.js")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload")
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    },

})

  const fileFilter =(req,file,cb)=>{
    const isFileTypeAllowed =FileTypeValidator(file)
    if(isFileTypeAllowed){
      return cb(null,true)
    }else{
      cb(new multer.MulterError(UNEXPECTED_FILE_TYPE.code ,UNEXPECTED_FILE_TYPE.message));
    }
  }

const upload = multer({
    storage: storage,
    fileFilter:fileFilter,
}).array("file",1)

module.exports={ upload }