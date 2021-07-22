const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single('file_name'), async (req, res) => {
  return res.status(200).json({ msg: "success" });
});

app.listen(9000, () => console.log("server started"));
