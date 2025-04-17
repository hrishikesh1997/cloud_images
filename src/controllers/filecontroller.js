const { error } =require ("console");
const  cloudinaryUpload  =require ("../service/fileservice");

const  fileController = async (req,res)=>{

     try {

          if(!req.files){
             return res.status(200).json({message:"No files present in the requets body  "})
          }

          if(Array.isArray(req.files)  && req.files.length ===0){
               return res.status(500).json({error:{description:"No file uploaded "}})
          }
          
          const file = req.files[0];
          const resopnse = await cloudinaryUpload(file)
          if (!resopnse || !resopnse.secure_url) {
               throw new Error("Cloudinary upload failed: No secure_url in response");
             }
          res.status(200).json({message : "File uploaded succsfully  ",UploadResults : resopnse})
     } catch (error) {
           res.status(500).json({message:error.message})
     }
     
     
}

module.exports = fileController

