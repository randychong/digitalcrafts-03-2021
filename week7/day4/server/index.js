const express = require("express");
const app = express();
const cors = require ("cors");
const port = process.env.PORT || 3008;
const pool = require("./db.js");
