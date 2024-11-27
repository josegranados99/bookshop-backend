import express, { json } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/v1/users/userRoute.js";

dotenv.config();

const PORT_BACKEND =process.env.PORT_BACKEND || 3000;

const app = express();

app.use(json());
//Routing
app.use("/api/v1/user", userRouter);

//middleware
app.use((req, res) => {
  res.status(404).json({
    error: {
      "message": "Not found"
    }
  });
});

app.listen(PORT_BACKEND, ()=>{
    console.log(`Server listening on port ${PORT_BACKEND}`);
    
});