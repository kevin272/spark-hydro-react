const express = require("express");
const router = express.Router();
const Team = require("../models/team");
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/team/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// GET all team members
router.get("/", async (req, res) => {
  const members = await Team.find();
  res.json(members);
});

// CREATE new team member
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const newMember = new Team({
      name: req.body.name,
      role: req.body.role,
      image: req.file.path,
    });
    await newMember.save();
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE team member
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      role: req.body.role,
    };
    if (req.file) updateData.image = req.file.path;

    const updatedMember = await Team.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE team member
router.delete("/:id", auth, async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ msg: "Team member deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
