const coursecontroller = require("../controllers/CoursesController")



const express = require("express")
const courserouter = express.Router()

courserouter.post("/insertcourse",coursecontroller.insertcourse)
courserouter.get("/viewstudents",coursecontroller.viewcourses)
courserouter.post("/checkstudentlogin",coursecontroller.checkcourses)
courserouter.delete("/deletestudent",coursecontroller.deletecourse)


module.exports = courserouter