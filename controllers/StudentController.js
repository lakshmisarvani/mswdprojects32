const Student= require("../models/Student")


const insertstudent = async (request, response) => {
    try 
     {
         //await must present beside input
       const input =  request.body;  //json input
       //JobSeeker.js is class
       const student = new Student(input);
       //save the record => object_name.save()
      await student.save(); //when error occured bcoz of duplicate
       response.send('Registered Successfully');
     } 
    catch(e) 
     {
       response.status(500).send(e.message);
     }
   };

   const checkstudentlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const student = await Student.findOne(input)
       response.json(student)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const viewstudents = async (request, response) => 
 {
    try 
    {
      const students = await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletestudent = async (request, response) => 
  {
     try 
     {
       //without paramaters => request.params /?id (? is used inorder to consider it as variable instead of part)
       const email = request.params.email
       const student = await Student.findOne({"email":email}) //{schema:variable}
       if(student!=null)
       {
         await Student.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

module.exports ={insertstudent,checkstudentlogin,viewstudents,deletestudent}