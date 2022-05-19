const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const itemRoutes = require("./routes/itemRoutes");
const userRoute = require("./routes/userRoute");
const app = express();
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", itemRoutes);
app.use("/api/users", userRoute);
const PORT = process.env.PORT || 9000;
//home route
app.get("/", (req, res) => {
  res.json("Welcome to Shop For Me API");
});
app.listen(PORT, (req, res) => {
  console.log("server is up!!! : ", PORT);
});
