const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const cors = require('cors');
const postRoutes = require('./routes/posts.js');

const app = express();

// for the images & other info
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// to solve cors issues
app.use(cors());

// setup routes
app.use('/posts', postRoutes);

// load config file
dotenv.config({ path: './config/config.env' });

// connect to mongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
