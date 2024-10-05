// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const subscriptionRoutes = require('./routes/subscription');
const path = require("path");
dotenv.config();

const app = express();
app.use(cors(
    origin=process.env.FRONTEND_URL,
    credentials=true
));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Use Routes
app.use('/api/subscriptions', subscriptionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




app.get("/", (req, res) => {
  res.send("Assests Roster")
});