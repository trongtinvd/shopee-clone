const express = require("express");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const apiRouter = require("./routes/api.js");

app.use("/api", apiRouter);
app.use(express.static("public"));

app.listen(3333);
