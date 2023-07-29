const express = require("express");
const {
  createRestaurent,
  getRestaurents,
  getRestaurentsById,
  updateRestaurentById,
} = require("../controller/Restaurent");

const router = express.Router();

router.route("/restaurent").post(createRestaurent);
router.route("/allrestaurent").get(getRestaurents);
router.route("/restaurent/:id").get(getRestaurentsById);
router.route("/updateRestaurent/:id").patch(updateRestaurentById);

module.exports = router;
