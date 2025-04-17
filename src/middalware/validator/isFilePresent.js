
const isFilePresent =async (req,res,next)=>{
   if(!req.files){
      return res.status(400).json({description :"File is not present "})
   }

   if(Array.isArray(req.files) && req.files.length ===0){
       return res.status(500).json({description:"No file uploaded"})
   }
   next()
}

module.exports = isFilePresent 