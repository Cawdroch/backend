// Import modules

const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database.js");
const port = process.env.PORT || 5000;
const cors = require ('cors');

connectDB();
const app = express();

// Add json logic

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define routes

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Define error handler

app.use(errorHandler);

// Define server listening port

app.listen(port, () => console.log("Server listening on ${port}"));
