const mongoose = require("mongoose");
require("dotenv/config");

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGO_URL;
    console.log("Mongo URI →", uri);  // DEBUG, remove later

    await mongoose.connect(uri);
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
};

module.exports = connectToDatabase;
