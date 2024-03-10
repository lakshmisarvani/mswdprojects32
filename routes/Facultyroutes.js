const facultycontroller = require("../controllers/FacultyController")



const express = require("express")
const facultyrouter = express.Router()

facultyrouter.post("/insertfaculty",facultycontroller.insertfaculty)
facultyrouter.get("/viewfaculty",facultycontroller.viewfaculty)
facultyrouter.post("/checkfaculty",facultycontroller.checkfacultylogin)
facultyrouter.delete("/deletefaculty",facultycontroller.deletefaculty)

module.exports = facultyrouter