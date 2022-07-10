const express = require("express");
const mongoose = require("mongoose");
// excesories
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
const useRoute = require("./routes/user");
dotenv.config();
// mongoose mongodb connection
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("dbConnected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/users", useRoute);

// app listen and port connection
app.listen(port, () => {
  console.log("App is running on", port);
});
