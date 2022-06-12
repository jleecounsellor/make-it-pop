const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//home route
app.get("/", function(req, res){
  res.render("home");
});

//standard garland route
app.get("/standard-garland", function(req, res){
  res.render("standard-garland");
});

//luxury garland route
app.get("/luxury-garland", function(req, res){
  res.render("luxury-garland");
});

//moon gate garland route
app.get("/moon-gate-garland", function(req, res){
  res.render("moon-gate-garland");
});

//rainbow arch route
app.get("/rainbow-arch", function(req, res){
  res.render("rainbow-arch");
});

//balloon mosaic route
app.get("/balloon-mosaic", function(req, res){
  res.render("balloon-mosaic");
});

//add-ons route
app.get("/add-ons", function(req, res){
  res.render("add-ons");
});

//faq route
app.get("/faq", function(req, res){
  res.render("faq");
});

//testimonials route
app.get("/testimonials", function(req, res){
  res.render("testimonials");
});

//about route
app.get("/about", function(req, res){
  res.render("about");
});

//book route
app.get("/book", function(req, res){
  res.render("book");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});
