const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");

var path = require("path");
const express = require("express");
//const mockAPIResponse = require("./mockAPI.js");

const PORT = process.env.PORT || 5000;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const API_KEY = process.env.API_KEY;

const app = express();
app.use(express.static("dist"));

//config express to use body-parser as middle-ware
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
//Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

getSentiments = async function (url = "") {
  const response = await fetch(url);
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

app.post("/sentiments", async function (req, res) {
  const full_URL = `${baseURL}${API_KEY}&lang=en&url=${req.body.article_url}&model=general`;
  const newData = await getSentiments(full_URL);
  res.send(newData);
});
