// Create variables

const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// Define routes

app.use("/api/tasks", require("./routes/taskRoutes"));

// Add json logic

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define server listening port

app.listen(port, () => console.log("Server listening on ${port}"));
