const mongoose =require("mongoose")

const courseschema= new mongoose.Schema({
    name:{
        type: String,
      required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
});

const course=mongoose.model('course',courseschema);

module.exports = course;