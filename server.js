import express from "express";
import cors from "cors";
import apiRouter from "./routes/api.js";
import { logger } from "./utils/middleware.js";
import cookieParser from "cookie-parser";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/login", async (req, res) => res.status(200).render("login"));
app.get("/signup", async (req, res) => res.status(200).render("signup"));

app.use("/api", logger, apiRouter);
app.use(express.static("public"));

app.listen(3333);
