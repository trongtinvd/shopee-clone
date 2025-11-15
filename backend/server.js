import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";
import { logger } from "./utils/middleware.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/api", logger, apiRouter);
app.use(express.static("../fontend"));

app.listen(3333);
