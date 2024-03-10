const mongoose = require("mongoose")

const facultyschema =new mongoose.Schema({
    fullname:{
        type: String,
      required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    branch:{
        type:String ,
        required:true
    },
    designation:{
        type : String ,
        required:true

    },
    password: {
        type: String,
        required: true
      }

});

const faculty=mongoose.model('faculty',facultyschema);

module.exports=faculty;