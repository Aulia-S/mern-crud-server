const express = require("express");
const app = express();
const connectDB = require("./database/db");
const morgan = require("morgan");
const stuffRoutes = require("./routes/stuff");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/stuff", stuffRoutes);

connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, console.log(`Listening on port http://localhost:${port}/`));
