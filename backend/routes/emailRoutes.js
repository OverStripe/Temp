const express = require("express");
const router = express.Router();
const { createEmail, getEmails } = require("../controllers/emailController");

// Route to create a new temp email
router.post("/create", createEmail);

// Route to fetch emails for a temp email
router.get("/list", getEmails);

module.exports = router;
