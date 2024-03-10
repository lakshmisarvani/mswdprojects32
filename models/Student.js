const mongoose = require("mongoose")

const studentschema = new mongoose.Schema({
    fullname:{
        type: String,
      required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
      },

});

const student=mongoose.model('student',studentschema);

module.exports=student;