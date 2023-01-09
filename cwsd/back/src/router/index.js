const { query } = require("express");
const express = require("express");
const { collection } = require("../models/product");
const router = express.Router();
const Product = require("../models/product")


router.get("/products", async (req, res, next) => {
  try {
      let result = await Product.find();
        res.json({
          code: 200,
          data: result,
          message: "请求成功",
        });
      } catch (e) {
        next(e);
      }
})

// 搜索
router.get("/products/search", async (req, res, next) => {
  try {
    let sql = await Product.find(app_share_title)
    // let result = await query(sql, req.query);
    res.json({
      code: 200,
      message: "请求成功",
      data: sql,
    });
  } catch (e) {
    next(e);
  }
})

module.exports = router;