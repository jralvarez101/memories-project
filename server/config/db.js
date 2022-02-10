const mongoose = require('mongoose');

// setting up mongoDB connection with the MONGO_URI
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // if there is an error, show error and stop connection
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
