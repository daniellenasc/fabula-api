const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to DB: ", dbConnection.connection.name);
  } catch (error) {
    console.error("Database connection error: ", error);
  }
}
module.exports = connect;
