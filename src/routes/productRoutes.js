const router = require("express").Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  getAllProducts,
  addProduct,
  getSingleProduct,
  getAllCategories,
  getAllProductsByCategory,
  deleteSingleProduct,
  updateSingleProduct,
  test,
} = require("../controllers/productControllers");

router.route("/").get(getAllProducts).post(protect, addProduct);
router.route("/test").get(test);
router.route("/categories").get(getAllCategories);
router.route("/category").get(getAllProductsByCategory);
router
  .route("/:id")
  .get(getSingleProduct)
  .delete(protect, deleteSingleProduct)
  .patch(protect, updateSingleProduct);

module.exports = router;
