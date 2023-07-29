const Restaurent = require("../model/Restaurent");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dd8ckn2oz",
  api_key: "822572954714859",
  api_secret: "Z1JhP7NlqSJtVNrwbBJje_Q6ynA",
});

exports.createRestaurent = async (req, res) => {
  try {
    const file = req.files.photo;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });
    const createRestaurents = await Restaurent.create({
      Name: req.body.Name,
      Description: req.body.Description,
      Time: req.body.Time,
      Rating: req.body.Rating,
      Image: result.secure_url,
    });

    console.log(result.secure_url);
    res.status(200).json(createRestaurents);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.getRestaurents = async (req, res) => {
  try {
    const restaurents = await Restaurent.find({});
    res.status(200).json({ restaurents });
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.getRestaurentsById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurents = await Restaurent.findOne({ _id: id });
    if (!restaurents) return res.status(404).json({ error: "Not Found" });
    res.status(200).json({ restaurents });
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.updateRestaurentById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurents = await Restaurent.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!restaurents) return res.status(404).json({ error: "Not Found" });
    res.status(200).json({ restaurents });
  } catch (error) {
    res.status(404).json({ error });
  }
};

exports.deleteRestaurentById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurents = await Restaurent.findByIdAndDelete({ _id: id });
  } catch (error) {
    res.status(404).json({ error });
  }
};
