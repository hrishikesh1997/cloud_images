



const { DataTypes } = require("sequelize");
const sequelize = require("./index"); // Ensure this is the correct path to your Sequelize instance

const Image = sequelize.define("Image", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secure_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    uploadedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: true,
});

module.exports = Image;
















/* const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index"); // Ensure correct Sequelize import

class Image extends Model {}

Image.init(
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        secure_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        uploadedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
        ,
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: "Image",
        timestamps: true, // Enables createdAt and updatedAt automatically
    }
);

module.exports = Image;
 */














/* const { DataTypes,Model } = require("sequelize");
const { sequelize } = require("./index");
const { default: upload } = require("../src/middalware/fileupload");


class Image extends Model {}

module.exports =(sequelize,DataTypes)=>{
    Image.init({
        url:DataTypes.STRING,
        secure_url:DataTypes.STRING,
        tags:DataTypes.STRING,
        uploadAt:DataTypes.DATE,
        userId:DataTypes.INTEGER,
        isDeleted:DataTypes.BOOLEAN,
        createdAt:DataTypes.DATE,
        UpdatedAt:DataTypes.DATE,
    },
{
    sequelize,
    modelName:"Image"
})
return Image
} */