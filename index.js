const express = require("express");
const cors = require("cors");
const productSchema = require("./model/allProducts");
const { default: mongoose } = require("mongoose");
const checking = require("./model/Checking");
const corsOptions = {
  origin: "http://localhost:3000",
};
const getAllProduct = require("./routes/product");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors(corsOptions));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// app.post("/uploadFile", async (req, res) => {
//   try {
//     const file = req.files.photo;
//     const result = await cloudinary.uploader.upload(file.tempFilePath, {
//       public_id: `${Date.now()}`,
//       resource_type: "auto",
//       folder: "images",
//     });
//     const productDetails = await productSchema.create({
//       Category: req.body.Category,
//       Type: req.body.Type,
//       Price: req.body.Price,
//       Rating: req.body.Rating,
//       Image: result.secure_url,
//     });
//     console.log(result);
//     res.status(200).json(productDetails);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// app.post("/Checking", async (req, res) => {
//   try {
//     const file = req.files.photo;
//     const result = await cloudinary.uploader.upload(file.tempFilePath, {
//       public_id: `${Date.now()}`,
//       resource_type: "auto",
//       folder: "images",
//     });

//     const createData = await checking.create({
//       Image: result.secure_url,
//     });

//     res.json(createData);
//   } catch (error) {
//     res.json(error.message);
//   }
// });

// product routes.
app.use("/api", getAllProduct);
app.use("/api", require("./routes/product"));

//Restaurent routes
app.use("/api/getAllRestaurent", require("./routes/restaurent"));
app.use("/api/getAllRestaurent", require("./routes/restaurent"));
app.use("/api/getAllRestaurent", require("./routes/restaurent"));
app.use("/api/getAllRestaurent", require("./routes/restaurent"));

const url = process.env.MONGO_URI;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully Connected 😁👌");
  })
  .catch((err) => {
    console.log("Not able to connect to the database", err);
  });
