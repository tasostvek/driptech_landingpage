
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3030;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/landingpage', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB!' ))
.catch(err => console.log( err ));

//DB schema
const Schema = mongoose.Schema;
const EmailSchema = new Schema({
    email: String,
    date: {
        type:String,
        default:Date()
    }
});


//Model
const EmailEntry = mongoose.model('EmailEntry', EmailSchema);


//Save data to MongoDB
const data = {
    email: 'test@gmail.com'
};

//Instance of model
const newEmail = new EmailEntry(data);

newEmail.save((error)=>{
    if(error){
        console.log("We have an error...");
    }
    else{
        console.log(`Email ${data.email} has been saved to MongoDB`);
    }
});


//HTTP request logger
app.use(morgan('tiny'));


app.get('/', (req,res) => {
    const data = {
        name: 'driptech',
        year:'2020'
    }
    res.json(data);
});

app.get('/api/name', (req,res) => {
    const data = {
        name: 'newApp',
        year:'2021'
    }
    res.json(data);
});

app.listen(PORT, console.log(`Server is running at port ${PORT}`));