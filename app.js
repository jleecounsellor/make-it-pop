const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://jamieleeg:aesBw39YZFnbGvU@cluster0.waagn.mongodb.net/makeitpopDB", {
  useNewUrlParser: true
});

//create the schema
const messageSchema = {
  name: String,
  email: String,
  subject: String,
  event: Date,
  product: String,
  response: String
};

//Posts collection
const Message = mongoose.model("Message", messageSchema);

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

//post route for book form
app.post("/home", function(req, res){
  res.render("home");
});

app.post("/book", function(req, res){

  const message = new Message({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    event: req.body.eventDate,
    product: req.body.productChoices,
    response: req.body.response
  });
  message.save(function(err) {
    if(!err){
      res.redirect("/");
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});
