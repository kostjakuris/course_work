const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const Post = require("./Post.js");

require("dotenv").config();

// const DB_URL = `mongodb+srv://kostjn04e:user@cluster0.rn2vxp0.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// const corsOptions = {
//     origin: "https://course-work-rosy.vercel.app/",
//     optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.post("/", async (req, res) => {
    try {
        const {email} = req.body;
        await Post.create({email});
        res.status(200).json("Subscribe successful");
    } catch (e) {
        res.status(500).json(e);
    }
});

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection successful");
        app.listen(PORT, () => console.log("Server started on port " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();



