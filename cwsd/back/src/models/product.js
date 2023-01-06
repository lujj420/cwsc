const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  id: Number,
  app_share_pic: String,
  app_share_title: String,
  video_url: String,
  pic_url: [mongoose.Schema.Types.Mixed],
  price: String,
  original_price: String,
  name: String,
  subtitle: String,
  attr: [mongoose.Schema.Types.Mixed],
  guarantee_title: String,
  guarantee_pic: String,
  keyword: String,
  cover_pic: String,
  unit: String,
  detail: String,
  cats: [String],
});

const Product = mongoose.model('Product', productSchema, "products");

module.exports = Product