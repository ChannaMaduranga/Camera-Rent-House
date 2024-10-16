const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {       
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    videoLink: { type: String, required: true, trim: true }
  },
  { versionKey: false } 
);

const Video = mongoose.model("video", videoSchema);
module.exports = Video;
