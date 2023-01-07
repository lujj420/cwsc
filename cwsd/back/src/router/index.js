const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res, next) => {
  // try {
  //     // let result = await Product.findfind({ cats: { $elemMatch: { $eq: "143016" } } });
  //     res.json(result);
  // } catch (e) {
  //     next(e);
  // }
  try {
    // let result = await Product.findfind({ cats: { $elemMatch: { $eq: "143016" } } });
    // let result = await Product.find({cats:{$elemMatch:{0:143016}}})
    let result = await Product.find();
    res.json({
      code: 200,
      data: result,
      message: "请求成功",
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
