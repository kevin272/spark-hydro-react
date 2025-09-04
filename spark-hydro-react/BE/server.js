require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const galleryRoutes = require("./routes/gallery");
const teamRoutes = require("./routes/team"); // you’ll create this
const projectRoutes = require("./routes/project"); // same
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/gallery", galleryRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
