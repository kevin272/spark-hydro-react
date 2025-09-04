const express = require("express");
const router = express.Router();
const Gallery = require("../models/gallery");
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, "uploads/"); },
  filename: function (req, file, cb) { cb(null, Date.now() + path.extname(file.originalname)); }
});
const upload = multer({ storage });

// GET all gallery items
router.get("/", async (req, res) => {
  const items = await Gallery.find();
  res.json(items);
});

// CREATE new gallery item
router.post("/", auth, upload.single("image"), async (req, res) => {
  const newItem = new Gallery({
    title: req.body.title,
    description: req.body.description,
    image: req.file.path
  });
  await newItem.save();
  res.json(newItem);
});

// UPDATE gallery item
router.put("/:id", auth, async (req, res) => {
  const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// DELETE gallery item
router.delete("/:id", auth, async (req, res) => {
  await Gallery.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted successfully" });
});

module.exports = router;
