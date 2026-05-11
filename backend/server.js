const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const journalRoutes =
  require("./routes/journalRoutes");
const hobbyRoutes =
  require("./routes/hobbyRoutes");


const connectDB = require("./config/db");
const authRoutes =
  require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/hobby", hobbyRoutes);

app.get("/", (req, res) => {
  res.send("GlowMax API Running 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
