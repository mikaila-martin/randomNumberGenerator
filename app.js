const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/:min-:max", (req, res) => {
  var min = Math.floor(req.params.min);
  var max = Math.floor(req.params.max);
  var int = Math.floor(Math.random() * (max - min) + min);
  
  res.json({ randint: int});
});


app.get("/Getrandom", (req, res) => {
    var int = Math.floor(Math.random() * 1000000)
    
    res.json({ randint: int});
});


app.listen(8199, () => {
  console.log(`Server is running on port 8199.`);
});


