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
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("Hello I am root");
});
//SHOW Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {
    allListings,
    showNavbar: true,
    title: "All Listing",
  });
});

//New Event Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs", {
    showNavbar: true,
    title: "New Listing",
  });
});
//Create Route
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});
//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  const listing = await Listing.findById(id);
  console.log(listing);
  res.render("listings/show.ejs", {
    listing,
    showNavbar: true,
    title: "Show Listings",
  });
});

//signup
app.get("/signup", (req, res) => {
  res.render("users/signup.ejs", {
    showNavbar: false,
    title: "Sign-Up",
  });
});
//login
app.get("/login", (req, res) => {
  res.render("users/login.ejs", {
    showNavbar: false,
    title: "Login",
  });
});
//defining the port number
app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
