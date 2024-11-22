const { v4: uuidv4 } = require("uuid");

// Mock database
let emailStorage = {};

// Create a Temporary Email
const createEmail = (req, res) => {
    const email = `${uuidv4()}@temp-mail.com`;
    emailStorage[email] = [];
    res.json({ email });
};

// Fetch Emails for the Temporary Address
const getEmails = (req, res) => {
    const email = req.query.email;
    if (email && emailStorage[email]) {
        res.json({ emails: emailStorage[email] });
    } else {
        res.status(404).json({ error: "Email not found" });
    }
};

module.exports = { createEmail, getEmails };
