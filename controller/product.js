const productSchema = require("../model/allProducts");
const upload = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

cloudinary.config({
  cloud_name: "dd8ckn2oz",
  api_key: "822572954714859",
  api_secret: "Z1JhP7NlqSJtVNrwbBJje_Q6ynA",
});

exports.createProduct = async (req, res) => {
  try {
    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });
    const productDetails = await productSchema.create({
      Category: req.body.Category,
      Type: req.body.Type,
      Price: req.body.Price,
      Rating: req.body.Rating,
      Image: result.secure_url,
    });
    console.log(result);
    res.status(200).json(productDetails);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const allProduct = await productSchema.find({}).sort({ createdAt: -1 });
    res.status(200).json({ allProduct });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
