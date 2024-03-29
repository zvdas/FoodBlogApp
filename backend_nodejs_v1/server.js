// install necessary modules
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// load environment variables
dotenv.config({ path: './configurations/config.env' });

// database config files
const connectDB = require('./configurations/mongodb');

// middleware files
const errorHandler = require('./middleware/error');

// route files
const blogs = require('./routes/blog.route');
const contacts = require('./routes/contact.route');

// initialize express app
const app = express();

// use body parser
app.use(express.json({ limit: '50mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// enable cors
// app.use(cors());
app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}));
// app.use(cors({ origin: process.env.ORIGIN }));

// connect database
connectDB();

// set static folder to serve view, logic & frontend files
app.use(express.static(path.join(__dirname,'/views/')));

// dev logging middleware
if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));

// mount routers
app.use('/api/v1/blogs', blogs);
app.use('/api/v1/contacts', contacts);

// set server to listen on defined port 
const server = 
app.listen(
    process.env.PORT || 5000, 
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.magenta.bold.underline)
);

// handle undhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold.underline);
    // close server & exit process
    server.close(() => process.exit(1));
});