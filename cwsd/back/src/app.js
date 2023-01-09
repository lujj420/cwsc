const express = require("express");
const router = require("./router")
const app = express();
app.use("/public", express.static("./public"))

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/cwsc');
}
main().catch(err => console.log(err));

app.use("/api/", router);

//错误处理中间件
app.use(function (err, req, res, next) {
  res.status(500).send('Something broke!')
})

app.listen("7777", () => {
  console.log("7777端口已启用");
})