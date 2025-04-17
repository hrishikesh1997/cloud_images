const path =require("path")
const FileTypeValidator = (file) => {
    console.log(file);

    const filetypes = /jpeg|jpg|png|gif/; // ✅ Allowed extensions
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // ✅ Check extension
    const mimeType = filetypes.test(file.mimetype.toLowerCase()); // ✅ Check MIME type

    return extname && mimeType;
};

module.exports = FileTypeValidator;
