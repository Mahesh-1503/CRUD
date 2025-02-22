const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to MongoDB ✅✅`);
  })
  .catch((err) => {
    console.log(`Error: ${err.message} ❌❌`);
  });

app.get("/", (req, res) => {
  res.send(`Welcome to the Home Page!`);
});

// Routes
app.use("/api/employees", employeeRoutes);




app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT} 🌐`);
});
