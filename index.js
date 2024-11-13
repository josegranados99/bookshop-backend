import express, {json} from "express";
import dotenv from "dotenv";

dotenv.config({path:"./.env"})

const port = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use((req, res) => {
    res.status(404).send("Not found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});