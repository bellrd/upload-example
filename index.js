const express = require("express");
const multer = require("multer");

const app = express();

let storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file_name"), async (req, res) => {
  try {
    console.log(req.body);
    let pwd = req.body.pwd;
    if (pwd != "ckret2020") {
      return res.status(400).json({ msg: "failed" });
    }
    return res.status(200).json({ msg: "success" });
  } catch (e) {
    console.log({ e });
    return res.status(400).json({ msg: "failed" });
  }
});

app.listen(9000, () => console.log("server started"));
