const { uploadCloudinary } = require("./cloudarnary");

const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const response = await uploadCloudinary(filePath);

    if (!response || !response.secure_url) {
      throw new Error("Cloudinary upload failed: No secure_url in response");
    }


     // ✅ Save image details to database
     const newImage = await Image.create({
        url: response.url,
        secure_url: response.secure_url,
        tags: req.body.tags || null,
        userId: req.user.id, // Ensure user ID is available in request
        uploadedAt: new Date()
    });

    return res.status(200).json({ imageUrl: response.secure_url ,image:newImage });
  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).json({ error: "Image upload failed. Please try again." });
  }
};

module.exports = { uploadImageController };
