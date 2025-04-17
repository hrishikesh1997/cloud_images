const { uploadCloudinary } =require ("../config/cloudarnary");
const fs =require ("fs")


const  cloudinaryUpload = async(file)=>{
    try {
         const cloudinaryResopnse = await uploadCloudinary(file.path)
         fs.unlink(file.path,(err)=>{
            if(err){
                console.log(err)
            }
         })
         return cloudinaryResopnse
    } catch (error) {
        console.error(error)
    }
}

module.exports =cloudinaryUpload