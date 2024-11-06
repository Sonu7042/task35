const express = require("express");
const router = require("./route/route");
const db= require('./db/db')
const cors= require('cors')

db()
const app = express();
app.use(express.json());
app.use(cors())

app.use("/", router);



app.listen(9000, () => console.log("server is listening..."));
