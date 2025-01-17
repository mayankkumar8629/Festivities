const express = require("express");
const app = express();
const Listing = require("./models/listings.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");


const MONGO_URL = "mongodb://127.0.0.1:27017/festivities";
main()
  .then(() => {
    console.log("connectd to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("Hello I am root");
});
//SHOW Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//New Event Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//signup 
app.get("/signup", (req,res)=>{
  res.render("users/signup.ejs");
})
//defining the port number
app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
