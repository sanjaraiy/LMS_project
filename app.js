import express from "express";
import cors from "cors";
// import cookieParse from "cookie-parse";
import { config } from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/userroutes.js";
import errorMiddleware from "./middlewares/errormiddleware.js";
config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTTEND_URL],
    credentials: true,
  })
);

// app.use(cookieParse());

app.use(morgan("dev"));
app.use("/ping", function (req, res) {
  res.send("/pong");
});

//routes of 3 modules
app.use("/api/v1/user", userRoutes);
app.all("*", (req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});

app.use(errorMiddleware);

export default app;
