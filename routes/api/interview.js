const express = require("express");
const router = express.Router();

// @route   GET api/interview/test
// @desc    Tests interview route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Interview Works" }));

module.exports = router;
