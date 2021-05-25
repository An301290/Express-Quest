const { response } = require("express");
const express = require("express");
const app = express();
const movies = require("./movies");
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my favorite movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  if (movies[req.params.id]) {
    res.status(200).json(movies[req.params.id]);
  } else {
    res.status(404).send("Sorry not found...");
  }
});

app.get("/api/search", (req, res) => {
  if (movies.filter((mo) => (mo.duration = req.query.maxDuration))) {
    res
      .status(200)
      .json(movies.filter((movie) => movie.duration < req.query.maxDuration));
  } else {
    res.status(404).send("No Matches!");
  }
});

app.get("/api/user", (req, res) => {
  res.status(401).send("Unauthorized");
});
