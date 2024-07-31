require("dotenv").config();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const connectDB = async () => {
  try {
    
    await mongoose.connect(MONGOURI);
    console.log("MongoDB connected succesfully");
  } catch (error) {
    console.log(`Connection failed`);
    process.exit(1)
  }
};

module.exports = connectDB
