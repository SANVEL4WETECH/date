const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function(req, res){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);


res.render("index", {kindofday:day});

});









app.listen(3000, function(){
  console.log("server is runnning on port 3000");
});
