const mongoose = require("mongoose");
// Assuming this sets up your MongoDB connection
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const itemRouter = require("./routes/item"); // Change import to require (CommonJS)
const videoRouter = require("./routes/video");

// const officerRouter = require("./pages/Routes/officers/officers");
// const visaProcessRouter = require("./pages/Routes/visaProcess/visaProcess");
// const authenticateUser = require("./pages/Routes/userVerify/userVerify");

const app = express();
const PORT = process.env.PORT || 8081;

const DB =
  "mongodb+srv://CameraRentHouse:Urmylife24@cluster0.42khj.mongodb.net/camera_rent_house?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTION", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Routes
// app.use("/", authenticateUser); // Apply middleware to specific routes
// app.use("/", officerRouter);
app.use("/", itemRouter);
app.use("/", videoRouter);


// Start server
app.listen(PORT, () => {
  console.log(`Connected at ${PORT}`);
});
