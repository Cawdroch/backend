// Create variables

const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database.js");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// Add json logic

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes

app.use("/api/tasks", require("./routes/taskRoutes"));

// Define error handler

app.use(errorHandler);

// Define server listening port

app.listen(port, () => console.log("Server listening on ${port}"));
