require("dotenv-safe").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const path = require("path");

// port yang digunakan server express, diatur di ENV, default: 3000
app.set("port", process.env.PORT || 3000);

// hanya nyalakan ketika develop
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(cors());
app.use(compression());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use("/static", express.static("static"));
app.use(require("./routes"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(app.get("port"));
