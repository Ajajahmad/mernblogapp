const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authroute = require("./routes/auth");
const userroute = require("./routes/users");
const postroute = require("./routes/posts");
const categoryroute = require("./routes/categories");
const multer = require("multer");
const path  = require("path");

dotenv.config();
app.use(express.json());
const DB = process.env.MONGO_URL;
app.use("/images",express.static(path.join(__dirname , "/images")));


mongoose.connect(DB).then(console.log("Connected to mongoDB"))
    .catch((err)=> console.log(err));

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth",authroute);
app.use("/api/users",userroute);
app.use("/api/posts",postroute);
app.use("/api/categories",categoryroute);


// app.use("/",function(req,res){
//     console,
// })

app.listen("5000",function(){
    console.log("backend is running on port 5000");
})