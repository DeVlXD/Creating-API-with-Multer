const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, res, cb) {
        return cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        return cb (null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const app = express();

const port = 3000;

const DB = 'mongodb+srv://nitish:nitish1403@nitishcluster.ty3w87w.mongodb.net/mycontacts-backend?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use(express.urlencoded({ extended:false }));

app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
})