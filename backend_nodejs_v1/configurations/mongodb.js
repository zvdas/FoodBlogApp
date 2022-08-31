// import necessary modules 
const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = 
        await mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.bold.underline);
} 

module.exports = connectDB;