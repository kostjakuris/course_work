const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model("Post", Post);