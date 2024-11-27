import express, { json } from "express";
import dotenv from "dotenv"

dotenv.config();

const PORT_BACKEND =process.env.PORT_BACKEND || 3000;

const app = express();

app.use(json());
app.use((req, res) => {
  res.status(404).send({ message: "Not found" });
});


app.listen(PORT_BACKEND, ()=>{
    console.log(`Server listening on port ${PORT_BACKEND}`);
    
});