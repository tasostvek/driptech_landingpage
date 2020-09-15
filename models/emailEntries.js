const mongoose = require('mongoose');

//DB schema
const Schema = mongoose.Schema;
const EmailSchema = new Schema({
    name: String,
    email: String,
    data: {
        type:String,
        default:Date()
    }
});

//Model
const EmailEntry = mongoose.model('EmailEntry', EmailSchema);

module.exports = EmailEntry;