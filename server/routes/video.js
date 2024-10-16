const express = require("express");
const Video = require("../models/videoModel"); // Ensure correct path
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const videoRouter = express.Router();

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination for image uploads (e.g., a folder called 'uploads')
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Save file with a unique name to avoid collisions
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize Multer for file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit the file size to 5MB
  fileFilter: (req, file, cb) => {
    // Accept image files only (jpg, png, jpeg)
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error("Only images are allowed! (jpeg, jpg, png)"));
    }
  },
});

// GET - Retrieve all videos
videoRouter.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Error fetching videos", error: error.message });
  }
});

// POST - Add a new video with an image
videoRouter.post("/api/videos", upload.single('image'), async (req, res) => {
  const { name, videoLink } = req.body; // Extract other video details from the request body
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename

  if (!image) {
    return res.status(400).json({ message: "Image is required" });
  }

  try {
    // Create a new video object
    const newVideo = new Video({
      name,
      image,
      videoLink,
    });

    // Save the new video to the database
    const savedVideo = await newVideo.save();

    // Respond with the saved video
    res.status(201).json(savedVideo); // 201 status indicates the resource was created
  } catch (error) {
    console.error("Error adding video:", error);
    res.status(500).json({ message: "Error adding video", error: error.message });
  }
});

// PUT - Update a video by ID (optionally updating the image)
videoRouter.put("/api/videos/:id", upload.single('image'), async (req, res) => {
  const videoId = req.params.id; // Extract the video ID from the URL
  const { name, videoLink } = req.body; // Extract updated fields from the request body
  const newImage = req.file ? req.file.filename : null; // Get the new uploaded image filename

  try {
    // Find the existing video
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // If a new image is uploaded, delete the old image file
    if (newImage && video.image) {
      const oldImagePath = path.join(uploadDir, video.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      video.image = newImage; // Update the image field with the new image filename
    }

    // Update other fields if provided
    if (name) video.name = name;
    if (videoLink) video.videoLink = videoLink;

    // Save the updated video to the database
    const updatedVideo = await video.save();

    // Respond with the updated video
    res.status(200).json(updatedVideo);
  } catch (error) {
    console.error("Error updating video:", error);
    res.status(500).json({ message: "Error updating video", error: error.message });
  }
});

// DELETE - Remove a video by ID and delete its image
videoRouter.delete("/api/videos/:id", async (req, res) => {
  const videoId = req.params.id; // Extract the video ID from the URL

  try {
    // Find the video by ID and remove it
    const deletedVideo = await Video.findByIdAndDelete(videoId);

    if (deletedVideo) {
      // If the video had an associated image, delete the image file
      if (deletedVideo.image) {
        const imagePath = path.join(uploadDir, deletedVideo.image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      res.status(200).json({ message: "Video deleted successfully", video: deletedVideo });
    } else {
      res.status(404).json({ message: "Video not found" });
    }
  } catch (error) {
    console.error("Error deleting video:", error);
    res.status(500).json({ message: "Error deleting video", error: error.message });
  }
});

// Static route to serve uploaded images
videoRouter.use('/uploads', express.static(uploadDir));

module.exports = videoRouter;
