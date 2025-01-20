const express = require("express");
const app = express();
const Listing = require("./models/listings.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const User = require("./models/user.js");
const LocalStrategy = require("passport-local");
const Blog = require("./models/blog.js");

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

const sessionOptions = {
  secret: "mysuperSecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 100,
    httpOnly: true,
  },
};
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
//sigup-post req
app.post("/signup", async (req, res) => {
  try {
    let { name, state, email, number, username, password } = req.body;
    const newUser = new User({ name, state, email, username, number });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/listings");
    });
  } catch (e) {
    console.error(e);
    res.redirect("/signup");
  }
});
//user-login
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/listings",
    failureRedirect: "/login",
    failureFlash: true,
  })
);
//user-logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});
//blog-forum
app.get("/blog", async (req, res) => {
  const allBlogs = await Blog.find({}).populate({
    path: "user",
  });
  res.render("blogs/forum.ejs", {
    allBlogs,
    showNavbar: true,
    title: "Forum",
  });
});
app.get("/newblog", (req, res) => {
  res.render("blogs/newforum.ejs", {
    showNavbar: true,
    title: "NewForum",
  });
});
app.post("/blog", async (req, res) => {
  const newBlog = new Blog(req.body.blog);
  newBlog.user = req.user._id;
  await newBlog.save();
  res.redirect("/blog");
});

//defining the port number
app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
