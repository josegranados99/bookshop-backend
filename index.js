import express, {json} from "express";
import dotenv from "dotenv";
import userRoute from "./routes/v1/user/userRoute.js";

dotenv.config({path:"./.env"});

const port = process.env.PORT || 3000;

const app = express();

//Routing
app.use("/api/v1/user", userRoute);

//midleware
app.use(json());
app.use((req, res) => {
    res.status(404).send("Not found");
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});