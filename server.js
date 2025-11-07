import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/api", apiRouter);
app.use(express.static("public"));

app.listen(3333);
