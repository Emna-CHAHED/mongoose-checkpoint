const express = require('express');
const ConnectDb = require('./config/ConnectDb');
const contactRoute = require('./Routes/ContactRoutes');

const cors = require('cors');


const app = express(); 
const port = 5004;

ConnectDb();

app.use(cors());
app.use(express.json());

app.use('/', contactRoute);



app.listen(port, (err) => 
    err ? console.log(err) : console.log(`You are connected sucessfully to the port ${port}`));
