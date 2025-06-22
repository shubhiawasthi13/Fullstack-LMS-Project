import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});
connectDb();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// apis..........
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
