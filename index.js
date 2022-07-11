const express = require("express");
const mongoose = require("mongoose");
// excesories
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
dotenv.config();
// mongoose mongodb connection
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("dbConnected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// app listen and port connection
app.listen(port, () => {
  console.log("App is running on", port);
});
