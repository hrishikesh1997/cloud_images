

const sharp = require("sharp")
const fs =require("fs")
const path = require("path")


const imageReSize = async(req,res,next)=>{
    try {
          const originalFilePath = req.files[0];
          const parsedPath = path.parse(originalFilePath)
          const outputfilepath = path.join(
            parsedPath.dir,"resized" +parsedPath.name+".jpeg"
          ) 

          await sharp (originalFilePath).resize({width:1500}).jpeg({
            quality:100 ,
            mozjpeg:true,
            chromaSubsampling:'4:4:4',
            trellisQuantisation:true,
            overshootDeringing:true,
            optimiseScans:true,
            progressive:true

          }).toFile(outputfilepath)
          req.files[0].path = outputfilepath;
          req.originalFilePath = originalFilePath
          next();
    } catch (error) {
         res.status(500).json({error:{description : error.message }})
    }
}

module.exports = {imageReSize}