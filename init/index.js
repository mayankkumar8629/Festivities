const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

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

const initDB = async () => {
  await Listing.deleteMany({});
  console.log(initData.data);
  await Listing.insertMany(initData.data);
  console.log("data was inititalized");
};
initDB();
