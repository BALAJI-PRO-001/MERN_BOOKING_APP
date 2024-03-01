import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get("/", async (req: Request, res: Response) => {
    res.json({"message" : "welocme to booking app"});
    res.end();
});

app.listen(3000, () => {
    console.log("Server running on port number : 3000 ");
    console.log("Link: http:://localhost:3000/")
});