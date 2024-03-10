const studentcontroller = require("../controllers/StudentController")



const express = require("express")
const studentrouter = express.Router()

studentrouter.post("/insertstudent",studentcontroller.insertstudent)
studentrouter.get("/viewstudents",studentcontroller.viewstudents)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)
studentrouter.delete("/deletestudent",studentcontroller.deletestudent)

module.exports = studentrouter