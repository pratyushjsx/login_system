const mongoose = require('mongoose');
const dbConnection = mongoose.connect(process.env.DB_URL).then((value, error) => {
    console.log("Successfully connected to database");
}).catch((error) => {
    console.log("Database connection failed. Exiting now...");
    console.error(error);
    process.exit(1);
});

module.exports = dbConnection;