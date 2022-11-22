const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const setError = require("./helper/error/handle.error");
const app = express();
const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
//And the header configuration
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);
//We also want a transition- limit in our app; so... 1mb is a lot, we normally will put less
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

//ROUTES--------------------

//--------------------------
app.use("*", (req, res, next) => next(setError(404, "Route Not Found")));

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected Error");
});
app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Server running on port:  http://localhost:${PORT}`);
});
