const mongoose = require('mongoose');
module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.link);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};