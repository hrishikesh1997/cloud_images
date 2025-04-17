const { v2 } = require("cloudinary");
const crypto = require("crypto");
const cloudinary=v2;

const cloudinaryconfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

const generateSignature = async (paramsSign) => {
  const api_secret = process.env.CLOUDINARY_API_SECRET; // ✅ Ensure this is loaded correctly

  // ✅ Correctly format params as a query string
  const sortedParams = Object.keys(paramsSign)
    .sort()
    .map((key) => `${key}=${paramsSign[key]}`)
    .join("&");

  // ✅ Correctly concatenate API secret at the END
  const signature = crypto
    .createHash("sha1")
    .update(sortedParams + api_secret) // ✅ No "&api_secret=" needed
    .digest("hex");

  return signature;
};

const uploadCloudinary = async (filePath) => {
  try {
    cloudinaryconfig();
    const timestamp = Math.round(Date.now() / 1000); // ✅ Use correct timestamp

    const paramsToSign = { timestamp };
    const signature = await generateSignature(paramsToSign); // ✅ Await the signature

    const result = await cloudinary.uploader.upload(filePath, {
      ...paramsToSign,
      signature,
      api_key: process.env.CLOUDINARY_API_KEY,
    });

    return result;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error; // ✅ Better error handling
  }
};

module.exports = { cloudinaryconfig, uploadCloudinary, generateSignature };
