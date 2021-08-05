const express = require("express");

const { routes } = require("./routes/index");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

// setting up ejs view engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.set("host", process.env.HOST || "http://localhost");
app.set("port", process.env.PORT || 9000);

app.use(routes);

// rendering the form to get age data
app.get("/", (req, res) => {
  res.render("index");
});

// all the functions
app.post("/", async (req, res) => {
  const { name, age } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json", // credentials.json can be downloaded from GCP api
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // create client instance for auth
  const client = await auth.getClient();

  // create instance for google sheet api

  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "116BVeYfW2nOcgY9Ro2aT1-qA9hUSpI6YMC-KOm-TJJ8"; //use your own spreadsheet id

  // get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1",
  });

  // Write rows to spreadsheet

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, age]],
    },
  });

  res.send("Successfully Submitted");
});

app.listen(app.get("port"), () => {
  console.log(
    "info",
    `App is running at ${app.get("host")}:${app.get("port")}`
  );
});

module.exports = app;
