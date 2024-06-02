const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const dbConnection = require('./src/database/db.js')
const userRouts = require('./src/routes/userRoute.js');
const cors = require('cors');


app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));
app.use("/api", userRouts);

app.listen(port, () => { console.log(`Server Running at http://localhost:${port}`) })  