
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/landingpage', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB!' ))
.catch(err => console.log( err ));


app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use(cors());
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`Server is running at port ${PORT}`));