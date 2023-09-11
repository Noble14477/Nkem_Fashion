const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookiePaser = require("cookie-parser");
const userRoute = require( "./routes/UserRoute.js");
const connectDB = require("./config/db.js");

const app = express()

dotenv.config();
app.use(cors());
app.use(cookiePaser());
app.use(express.json());


app.use("/api/auth", userRoute)
// app.use("/api/auth")

// connectDB();
__dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client", "dist")));

  app.get("/", (req, res) => {
    res.sendFile('./client/dist/index.html');
  });

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server rununin on:", PORT);
  });
});