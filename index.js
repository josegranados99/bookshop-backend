import express, { json } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/v1/users/userRoute.js";
import bookRouter from "./routes/v1/books/bookRoute.js";
import authorRouter from "./routes/v1/author/authorRoute.js";
import editorialRouter from "./routes/v1/editorial/editorialRoute.js";

dotenv.config();

const PORT_BACKEND = process.env.PORT_BACKEND || 3000;

const app = express();
//middleware
app.use(cookieParser());
app.use(json());
//Routing
app.use("/api/v1/user", userRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/author", authorRouter);
app.use("/api/v1/editorial", editorialRouter);

app.use((req, res) => {
  res.status(404).json({
    error: {
      message: "Not found",
    },
  });
});

app.listen(PORT_BACKEND, () => {
  console.log(`Server listening on port ${PORT_BACKEND}`);
});
