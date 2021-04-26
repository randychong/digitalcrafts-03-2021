const express = require("express");
const app = express();
const port = process.env.PORT || 3009; 

app.use(express.json());
app.use(cors());