const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

// Configurations
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// API Routes
app.use("/api/emails", emailRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
