import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./config/mongodb.js";
import connectCloudnary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//App config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudnary();

// middlewares

app.use(express.json());
app.use(cors());

// Api End Points
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hey");
});
app.listen(port, () => console.log("Server Started on PORT: " + port));
