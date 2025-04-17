const multer = require("multer");
const { Router } = require("express");

const  authenticateJWT  = require("../middalware/validator/authentication.js");

const { upload }= require("../middalware/fileupload.js");
const { UNEXPECTED_FILE_TYPE } = require("../constants/file.js");
const fileController = require("../controllers/fileController.js");
const { imageReSize } = require("../middalware/imageReize.js");
const  isFilePresent = require("../middalware/validator/isFilePresent.js");

const fileRouter = Router();

fileRouter.post(
    "/upload",
    authenticateJWT,
    (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                if (err instanceof multer.MulterError) {
                    if (err.code === UNEXPECTED_FILE_TYPE.code) {
                        return res.status(400).json({ error: { description: "Only image files are allowed." } });
                    }
                }
                return res.status(500).json({ error: { description: err.message } });
            }
            next();
        });
    },
    fileController,
    imageReSize,
    isFilePresent
);



module.exports = { fileRouter };
